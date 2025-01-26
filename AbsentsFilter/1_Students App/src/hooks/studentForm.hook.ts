import { useState } from "react";
import { IStudent } from "../@types.ts";
import { validateStudent } from "../utils/validation.ts";
import { useNavigate } from "react-router-dom";

const INITIAL_STUDENT = {
  age: 0,
  coursesList: [],
  id: "",
  isGraduated: false,
  name: "",
  absents: 0,
};

export const studentFormHandler = (onSubmit: (std: IStudent) => void) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [isOpen, setIsOpen] = useState(true);
  const [errorsList, setErrorsList] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  };

  const handleCoursesChange = (list: string[]) => {
    setStudent({ ...student, coursesList: list });
  };

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };

    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
      setMessage("Student Added Successfully");
      setTimeout(() => {
        nav("/");
      }, 1500);
    }
  };

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  };

  return {
    student,
    isOpen,
    errorsList,
    message,
    setIsOpen,
    handleChange,
    handleCoursesChange,
    handleSubmit,
    handleClear,
  };
};
