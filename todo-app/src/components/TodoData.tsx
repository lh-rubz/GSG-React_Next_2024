import React from 'react';
import './TodoData.css'; // Import the CSS file

interface TodoDataProps {
  totalCreated: number;
  totalCompleted: number;
  totalUrgent: number;
}

const TodoData: React.FC<TodoDataProps> = ({ totalCreated, totalCompleted, totalUrgent }) => {
  return (
    <div className="todo-data-container">
      <div className="todo-data-item">
        <p className="count">{totalCreated}</p>
        <p>Created Tasks</p>
      </div>
      <div className="todo-data-item">
        <p className="count">{totalCompleted}</p>
        <p>Completed Tasks</p>
      </div>
      <div className="todo-data-item">
        <p className="count">{totalUrgent}</p>
        <p>Urgent Tasks</p>
      </div>
    </div>
  );
};

export default TodoData;
