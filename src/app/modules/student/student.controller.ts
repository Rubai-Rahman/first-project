import { Request, Response } from "express";
import { StudentServices } from "./student.service";

//only requre req and res
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    //will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(student);
    //send response

    res.status(200).json({
      success: true,
      message: "Studnet is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//Get Students
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Studnets Data retrive successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Studnet is retrive successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
