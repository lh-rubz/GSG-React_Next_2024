import { IStudent } from "../@types";

export type State = {
  studentsList: IStudent[];
  totalAbsents: number;
};

export enum ActionType {
  INIT = "INIT",
  ADD_STUDENT = "ADD_STUDENT",
  REMOVE_FIRST = "REMOVE_FIRST",
  UPDATE_ABSENTS = "UPDATE_ABSENTS",
}

export type Action =
  | { type: ActionType.INIT; payload: IStudent[] }
  | { type: ActionType.ADD_STUDENT; payload: IStudent }
  | { type: ActionType.REMOVE_FIRST }
  | { type: ActionType.UPDATE_ABSENTS; payload: { id: string; change: number } };

const updateTotalAbsents = (students: IStudent[]): number =>
  students.reduce((total, student) => total + student.absents, 0);

export const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INIT:
      const totalAbsents = updateTotalAbsents(action.payload);
      return { studentsList: action.payload, totalAbsents };

    case ActionType.ADD_STUDENT:
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };

    case ActionType.REMOVE_FIRST:
      return {
        ...state,
        studentsList: state.studentsList.slice(1),
      };

    case ActionType.UPDATE_ABSENTS: {
      const updatedStudentsList = state.studentsList.map((student) =>
        student.id === action.payload.id
          ? { ...student, absents: student.absents + action.payload.change }
          : student
      );

      const updatedTotalAbsents = state.totalAbsents + action.payload.change;

      return {
        studentsList: updatedStudentsList,
        totalAbsents: updatedTotalAbsents,
      };
    }

    default:
      return state;
  }
};
