import mongoose ,{Schema} from "mongoose";
const serviceSchema = new Schema({
service:{
   type: String,
   required: true
},
description:{
   type : String,
   required: true
},
price:{
   type: String,
   required: true
},
provider:{
   type: String,
   required: true 
}
}
,{timestamps: true}
);

export const Service = mongoose.model("Service", serviceSchema);