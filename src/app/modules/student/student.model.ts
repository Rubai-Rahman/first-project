import { Schema, model } from "mongoose";
import { Gurdian, LocalGurdian, Student, UserName } from "./student.interface";

export const nameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    maxlength: [15, "Name can not be more than 15 character"],
    minlength: [3, "Name can be lest than 3 character"],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE} is not in capitalize format",
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
export const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: [true, "{VALUE}IS NOT  EXPECTED"] },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

export const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

export const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: nameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE } is not expected",
    },
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: {
    type: String,
    required: [true, "{VALUE} is not valid"],
    unique: true,
  },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+"],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: { type: gurdianSchema, required: true },
  localGurdian: { type: localGurdianSchema, required: true },
  profileImg: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
});

//model making

export const StudentModel = model<Student>("Student", studentSchema);
