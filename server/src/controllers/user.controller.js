import { User } from "../models/user.model.js";

import {ApiError} from "../utils/ApiError.js";
import  {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const  generateAccessTokenandRefreshToken =  async(userId)=>{
  const user = await User.findById(userId);
  const accessToken =   user.generateAccessToken();
  const refreshToken =  user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save();
//console.log({accessToken, refreshToken})

  return { accessToken, refreshToken};

}



const register = asyncHandler( async(req,res)=>{
  const {fullName, email, password, phoneNumber} = req.body;

  if(!fullName || !email || !password || !phoneNumber){
    throw new ApiError(400, 'All fields are required');
  };

  const oldUser = await User.findOne({
    $or: [{email}, {phoneNumber}]
  });

  if(oldUser){
    throw new ApiError(400, 'User already exists');
  };

  const user = await User.create({
    fullName,
    email,
    password,
    phoneNumber,
  });

  const tempUser = await user.save()

  const newUser = await User.findById(tempUser._id).select('-password');

  return res
  .status(201)
  .json(new ApiResponse(201, newUser,'User created successfully'));

});


const login = asyncHandler(async(req,res)=>{

  const {email,password} = req.body;

  if(!email || !password){
    throw new ApiError(400, 'All fields are required');
  };

  const user = await User.findOne({email});

  if(!user){
    throw new ApiError(400, 'User does not exist');
  };

  const isPasswordCorrect = await user.comparePassword(password);

  if(!isPasswordCorrect){
    throw new ApiError(400, 'Invalid credentials');
  };

  const  { accessToken, refreshToken} =  await generateAccessTokenandRefreshToken(user._id);

//  console.log({ accessToken})

  const loggedInUser = await User.findById(user._id).select('-password -refreshToken');

  const onptions = {
    httpOnly: true,

  }

  res.cookie("accessToken", accessToken, onptions);
  res.cookie("refreshToken", refreshToken, onptions);

  return res
  .status(200)
  .json(new ApiResponse(
     200, 
    {
      user: loggedInUser,
      accessToken,
      refreshToken,
    },
    'User logged in successfully'


   ));

});


const getUserProfile = asyncHandler(async(req,res)=>{

  return res
  .status(200)
  .json(new ApiResponse(
     200, 
     req.user,
    'User profile fetched successfully'

))

});


export {
  register,
  login,
  getUserProfile,
}



