import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import {Contact } from '../models/contact.model.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import mongoose, { Mongoose, isValidObjectId } from 'mongoose';

const getUsers  = asyncHandler(async(req,res,next)=>{

   const users = await User.find().select('-password -refreshToken');
   if(!users && users.length === 0){
      return next(new ApiError(404, 'No users found'));
   }
   
   return res 
   .status(200)
   .json(new ApiResponse(200, users, 'Users fetched successfully'));

});


const getContacts  = asyncHandler(async(req,res)=>{
   const contacts = await Contact.find();
   if(!contacts && contacts.length === 0){
      throw new ApiError(404, 'No contacts found');
   }
   
   return res 
   .status(200)
   .json(new ApiResponse(200, contacts, 'Contacts fetched successfully'));
})


const deleteUser = asyncHandler(async(req,res)=> {
   const {_id} = req.params;
    const id = new mongoose.Types.ObjectId(_id);
  
   const user  =  await User.findById(id);

   if(!user){
      throw new ApiError(404, 'User not found');
   }


   if(req.user?._id.toString() !== user._id.toString()){
      throw new ApiError(401, 'You are not authorized to delete this user');
   }


   if(user.isAdmin){
      throw new ApiError(400, 'Admin cannot be deleted');
   }

   await user.deleteOne();
   
   return res 
   .status(200)
   .json(new ApiResponse(200, {}, 'User deleted successfully'));
})



const updateUser = asyncHandler(async(req,res)=> {
  const {fullName, email, phoneNumber} = req.body;
   const {_id} = req.params;
   
   if(!isValidObjectId(_id)){
      throw new ApiError(400, 'Invalid id');
   }

   if(!fullName || !email || !phoneNumber){
      throw new ApiError(400, 'All fields are required');
   }

   const user =  await User.findById(_id);

   if(!user){
      throw new ApiError(404, 'User not found');
   }

   if(req.user?._id.toString() !== user._id.toString()){
      throw new ApiError(401, 'You are not authorized to update this user');
   }
  

   const  updatedUser =  await User.findByIdAndUpdate(_id, 
      {
      fullName,
      email,
      phoneNumber,

   },
    {new: true}
    ).select('-password -refreshToken');
   

   if(!updatedUser){
      throw new ApiError(404, 'User not found');
   }

   return res
   .status(200)
   .json(new ApiResponse(200, updatedUser, 'User updated successfully'));

})


const getUser = asyncHandler(async(req,res)=> {
   const {_id} = req.params;

       if(!isValidObjectId(_id)){
         throw new ApiError(400, 'Invalid id');
       }

      const user = await User.findById(_id).select('-password -refreshToken');
      if(!user){
         throw new ApiError(404, 'User not found');
      }

      return res
      .status(200)
      .json(new ApiResponse(200, user, 'User fetched successfully'));
   });


const deleteContact = asyncHandler(async(req,res)=> {
   const {_id} = req.params;

   if(!isValidObjectId(_id)){
      throw new ApiError(400, 'Invalid id');
   }
  
    const contact  = await User.findById(_id);

   if(!contact){
      throw new ApiError(404, 'Contact not found');
   
   }

    if(req.user?._id.toString() !== contact._id.toString()){
      throw new ApiError(401, 'You are not authorized to delete this contact');
    }

   await contact.deleteOne();


   return res
   .status(200)
   .json(new ApiResponse(200, {}, 'Contact deleted successfully'));
})

export {
getUsers,
getContacts,
updateUser,
getUser,
deleteUser,
deleteContact,
}