import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface UserInput {
  product: string;
  user: {
    firstName: string;
    lastName: string;
    fnameKana: string;
    lnameKana: string;
    gender: string;
    age: string;
    vehicleType: string;
    postCode: string;
    city: string;
    address: string;
    emailAddress: string;
  };
  option: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    product: { type: String, required: true },
    user: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      fnameKana: {
        type: String,
        required: true,
      },
      lnameKana: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      vehicleType: {
        type: String,
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
    },
    option: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;
