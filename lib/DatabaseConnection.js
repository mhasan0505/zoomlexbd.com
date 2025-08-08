import mongoose from 'mongoose';

const MONDODB_URI = process.env.MONGODB_URI 

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { 
    conn: null, 
    promise: null 
};
}

async function ConnectDB() {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      cached.promise = mongoose.connect(MONDODB_URI).then((mongoose) => {
        return mongoose;
      });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  }     

export default ConnectDB;