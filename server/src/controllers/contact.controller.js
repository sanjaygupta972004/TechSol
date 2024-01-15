import { Contact } from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const contactForm = asyncHandler(async (req, res) => {
   const { fullName, email, message } = req.body;

   if([fullName,email,message].some((field)=>field==="")){
      throw new ApiError(400, "All fields are required");
   }

   const exitContact = await Contact.findOne({ 
      $or: [{ email }, { fullName }],
    });

   if (exitContact) {
      throw new ApiError(400, "Your Contact details already exist");
   }

   const contact = await Contact.create({
      fullName,
      email,
      message,
   });

   await contact.save();

   return res
      .status(201)
      .json( new ApiResponse(201, contact, "Contact details saved successfully"));

});

export { contactForm };
