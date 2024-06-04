import mongoose from "mongoose";

async function connectDB() {
  try {
    const db = await mongoose.connect("mongodb://localhost/rest-api-ts");
    console.log(">>> DB is connected to: " + db.connection.db.databaseName);
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
}

export default connectDB;
