import {ApiError} from "../utils/ApiError.js";
import {Service} from "../models/service.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";



 const getServices = asyncHandler(async function (req, res) {

   const services = await Service.find({});

   if(!services){
      throw new ApiError(404, "No services found");
   }

   return res
      .status(200)
      .json(new ApiResponse(200, services, "Services retrieved successfully"));

});

export {
   
    getServices  
    }