import React, { useState } from 'react';
import Form from './Form';
import TodoData from './TodoData';
import TodoItem from './TodoItem';
import "./AllTodos.css";
interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  isUrgent: boolean;
}

const AllTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string, isUrgent: boolean) => {
    setTodos([...todos, { id: Date.now(), title, isCompleted: false, isUrgent }]);
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const totalCreated = todos.length;
  const totalCompleted = todos.filter((todo) => todo.isCompleted).length;
  const totalUrgent = todos.filter((todo) => todo.isUrgent).length;

  return (
    <div className="all-todos-cont">
      <Form onAddTodo={handleAddTodo} />
      <TodoData
        totalCreated={totalCreated}
        totalCompleted={totalCompleted}
        totalUrgent={totalUrgent}
      />
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            isUrgent={todo.isUrgent}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
