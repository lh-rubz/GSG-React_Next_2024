"use client";
import { Task } from '../types';
import { Check, Clock, ArrowLeft, Copy } from 'lucide-react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails = ({ task }: TaskDetailsProps) => {
  const handleCopyTitle = () => {
    navigator.clipboard.writeText(task.title).then(() => {
      toast.success('Task title copied to clipboard!');
    }).catch((error) => {
      toast.error('Failed to copy title');
      console.error('Failed to copy title:', error);
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-lg">
        <Link href="/" className="flex items-center text-blue-500 hover:underline mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Tasks
        </Link>

        <div className="p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 flex items-center justify-between">
            {task.title}
            <button 
              onClick={handleCopyTitle} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Copy Task Title"
            >
              <Copy size={20} />
            </button>
          </h1>
          <p className="text-lg mb-2 text-gray-700 flex items-center">
            Status: 
            {task.completed ? (
              <Check className="ml-2 text-green-500" size={20} />
            ) : (
              <Clock className="ml-2 text-yellow-500" size={20} />
            )}
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Priority: <span className={`font-medium ${{
              High: 'text-red-600',
              Medium: 'text-yellow-600',
              Low: 'text-green-600',
            }[task.priority]}`}>{task.priority}</span>
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default TaskDetails;
