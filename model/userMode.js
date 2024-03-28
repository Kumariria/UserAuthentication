import mongoose from "mongoose";
import {} from "dotenv/config";
const uri =
  "mongodb+srv://choudharyabhishekk:PCYu85zGXO205PXs@cluster0.9aevldg.mongodb.net/CostcoUsers?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("-----------Connected to MongoDB--------------"))
  .catch((err) => console.log(`######## Not Connected \n ${err}`));

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
});

const userModel = mongoose.model("GeneralUsers", userSchema);

export default userModel;
