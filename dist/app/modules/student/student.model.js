"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.studentSchema = exports.localGurdianSchema = exports.gurdianSchema = exports.nameSchema = void 0;
const mongoose_1 = require("mongoose");
exports.nameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
});
exports.gurdianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
});
exports.localGurdianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});
exports.studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: exports.nameSchema },
    gender: ["male", "female"],
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gurdian: { type: exports.gurdianSchema },
    localGurdian: { type: exports.localGurdianSchema },
    profileImg: { type: String, required: true },
    isActive: { type: Boolean, required: true },
});
//model making
exports.StudentModel = (0, mongoose_1.model)("Student", exports.studentSchema);
