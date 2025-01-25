import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

interface FormProps {
  onAddTodo: (title: string, isUrgent: boolean) => void;
}

const Form: React.FC<FormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Title cannot be empty');
      return;
    }
    onAddTodo(title, isUrgent);
    setTitle('');
    setIsUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Type Todo here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
          className="checkbox"
        />
        <label>Urgent</label>
      </div>
      <button type="submit" className="submit-btn">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
