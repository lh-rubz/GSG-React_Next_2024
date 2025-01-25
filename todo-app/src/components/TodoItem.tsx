import React, { useState } from 'react';
import './TodoItem.css'; 
import staticIcon from '../assets/trash-bin.png';
import animatedIcon from '../assets/trash-bin-unscreen.gif';

interface TodoItemProps {
  id: number;
  title: string;
  isCompleted: boolean;
  isUrgent: boolean;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  isUrgent,
  onToggleComplete,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="todo-item-container">
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
          className="checkbox"
        />
        <p className={isCompleted ? 'completed' : ''}>
          {title} {isUrgent && <span className="urgent">[Urgent]</span>}
        </p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="delete-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? animatedIcon : staticIcon} 
          alt="Delete Icon"
          className={isHovered ? 'icon-normal' : 'icon-small'} 
          
     
        />
      </button>
    </div>
  );
};

export default TodoItem;
