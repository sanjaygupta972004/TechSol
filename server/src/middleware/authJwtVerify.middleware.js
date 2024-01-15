import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const jwtVerify = asyncHandler(async (req, _, next) => { 
   // console.log(req.cookies);
  // console.log(req.header("Authorization")); 

   const token = req.header("Authorization")?.replace("Bearer", "").trim();
  // console.log(token);
   
   if (!token) {
      throw new ApiError(401, "Unauthorized");
   }
   
   let decodeToken;
   try {
      decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
   } catch (error) {
      throw new ApiError(401, "Invalid credential");
   }

   if (!decodeToken) {
      throw new ApiError(401, "Unauthorized");
   }

   const user = await User.findById(decodeToken._id).select("-password -refreshToken ");

   if (!user) {
      throw new ApiError(401, "User not found");
   }

   req.user = user;
   next();
});
