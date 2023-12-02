import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  //static method
  // const result = await StudentModel.create(student);
  // return result;
  //instance methond
  const studentData = new StudentModel(student);
  const result = await studentData.save();// built in instance method
  
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
