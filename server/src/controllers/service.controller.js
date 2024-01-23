import {ApiError} from "../utils/ApiError.js";
import {Service} from "../models/service.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";


const createService = asyncHandler(async function (req, res) {
   
   const {service, description, price, provider} = req.body;

   if(!service || !description || !price || !provider){
      throw new ApiError(400, "Missing required fields");
   }

   const oldService = await Service.findOne({service});

   if(oldService){
      throw new ApiError(400, "Service already exists");
   }

   const newService = await Service.create ({
      service,
      description,
      price,
      provider
   });

   if(!newService){
      throw new ApiError(500, "Error creating service");
   }


   return res
      .status(201)
      .json(new ApiResponse(201, newService, "Service created successfully"));

});


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
    createService,
    getServices  
    }