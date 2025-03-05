"use client";
import { useEffect, useState } from 'react';
import { Task } from './types';
import Confetti from 'react-confetti';
import TaskItem from './components/TaskItem';
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import ProgressBar from './components/ProgressBar';

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data: Task[] = await response.json();
        const tasksWithPriority = data.map(task => ({
          ...task,
          priority: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)],
        }));
        setTasks(tasksWithPriority);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Filter tasks based on search query
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Reset to page 1 whenever the search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
    
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Task Tracker</h1>

        <div className="flex gap-4 mb-6">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        <ProgressBar completedTasks={completedTasks} totalTasks={totalTasks} />

        <ul className="space-y-4">
          {currentTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastTask >= filteredTasks.length}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;