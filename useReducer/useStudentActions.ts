import { useCallback, useReducer } from "react";
import { IStudent } from "../@types"; 
import { stateReducer, Action } from "../state/reducer";

const initialState = {
  studentsList: [] as IStudent[],
  totalAbsents: 0,
};

const useStudentActions = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const handleAddStudent = useCallback(
    (newStudent: IStudent) => {
      dispatch({ type: "ADD_STUDENT", payload: newStudent });
    },
    [dispatch]
  );

  const handleAbsentChange = useCallback(
    (id: string, change: number) => {
      dispatch({ type: "UPDATE_ABSENTS", payload: { id, change } });
    },
    [dispatch]
  );

  const removeFirst = useCallback(() => {
    dispatch({ type: "REMOVE_FIRST" });
  }, [dispatch]);

  const setInitialData = useCallback(
    (studentsList: IStudent[]) => {
      const totalAbsents = studentsList.reduce(
        (prev, cur) => prev + cur.absents,
        0
      );
      dispatch({
        type: "INIT",
        payload: studentsList,
      });
    },
    [dispatch]
  );

  return {
    handleAddStudent,
    handleAbsentChange,
    removeFirst,
    setInitialData,
    state,
  };
};

export default useStudentActions;
