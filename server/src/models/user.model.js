import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
   fullName:{
         type: String,
         required: true,

   },
   email:{
         type: String,
         required: true,
         unique: true,
   },
   password:{
         type: String,
         required: false,
         unique: true,
    
   },
   phoneNumber:{
      type: String,
      required: true,
   },
 
   refreshToken:{
         type: String,
   },
      isAdmin:{
           type: Boolean,
             default: false,
      },

   
},{timestamps: true});

userSchema.pre('save', async function(next){
   if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10);
   next();
   });

userSchema.methods.comparePassword =  async function(password){
        try {
            return  await bcrypt.compare(password, this.password);
        } catch (error) {
            console.log(error.message);
            throw error;
        }
   }

userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
      { 
             _id: this._id,
              name: this.fullName,
              email: this.email,
              isAdmin: this.isAdmin
  },
       process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
        )
       };

userSchema.methods.generateRefreshToken = function(){
   return jwt.sign(
      {_id: this._id},
       process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
        )
}
   

 export const User = new mongoose.model('user', userSchema);