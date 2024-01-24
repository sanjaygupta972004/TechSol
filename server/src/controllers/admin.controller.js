import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import {Contact } from '../models/contact.model.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';

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


const deleteUser = asyncHandler(async(req,res)=>{
   const {_id} = req.params;

   if(req.user?._id !== _id){
      throw new ApiError(401, 'Unauthorized User');
   }

   const user = await User.findById(_id);
   if(!user){
      throw new ApiError(404, 'User not found');
   }
   
   if(user.isAdmin){
      throw new ApiError(400, 'Admin cannot be deleted');
   }

   await user.remove();
   
   return res 
   .status(200)
   .json(new ApiResponse(200, {}, 'User deleted successfully'));
})

const updateUser = asyncHandler(async(req,res)=> {
  const {fullName, email, phoneNumber, isAdmin} = req.body;
   const {_id} = req.params;
   if(req.user?._id !== _id){
      throw new ApiError(401, 'Unauthorized User');
   }

   const  updatedUser = User.findByIdAndUpdate(_id, 
      {
      fullName,
      email,
      phoneNumber,
      isAdmin
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
   const user = await User.findById(_id).select('-password -refreshToken');
   if(!user){
      throw new ApiError(404, 'User not found');
   }

   return res
   .status(200)
   .json(new ApiResponse(200, user, 'User fetched successfully'));
})


const deleteContact = asyncHandler(async(req,res)=> {
   const {_id} = req.params;

   const contact = await Contact.findById(_id);
   if(!contact){
      throw new ApiError(404, 'Contact not found');
   }  

   await contact.remove();

   return res
   .status(200)
   .json(new ApiResponse(200, {}, 'Contact deleted successfully'));
})

export {
getUsers,
getContacts,
deleteUser,
updateUser,
getUser,
deleteContact,
}