import mongoose from 'mongoose';
import { DATA_BASE } from '../constant.js';

const connectionDb = async () => {
   try {
      const connectionParams =  await mongoose.connect(`${process.env.MONGO_URL}/${DATA_BASE}`);
      console.log(`Connected to database : ${connectionParams.connection.host}`)
   } catch (error) {
      console.log(`Could not connect to database : ${error}`)
      throw new Error(error)
   }
}

export default connectionDb;