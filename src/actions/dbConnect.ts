import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
  if (mongoose.connections[0].readyState) {
    return;
  }

  await mongoose
    .connect(process.env.MONGODB_URL, {
      socketTimeoutMS: 360000,
      dbName: process.env.MONGODB_NAME,
    })
    .catch((error) => {
      console.error("Error connecting to database: ", error);
      throw error;
    });
}

export default dbConnect;
