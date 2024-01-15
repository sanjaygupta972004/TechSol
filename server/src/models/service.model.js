import { Schema, Mongoose} from "mongoose";

const serviceSchema = new Schema({
service:{
   typeof: String,
   required: true
},
description:{
   typeof : String,
   required: true
},
price:{
   typeof: Number,
   required: true
},
provider:{
   typeof: String,
   required: true 
}
}
,{timestamps: true}
);

export const Service = Mongoose.model("Service", serviceSchema);