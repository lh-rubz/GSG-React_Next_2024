"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Task } from '../../types';

import LoadingSpinner from '../../components/LoadingSpinner';
import TaskDetails from '@/app/components/TaskDetailes';
import NotFound from '@/app/not-found';

const TaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) throw new Error('Task not found');
        const data: Task = await response.json();
        data.priority = ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)];
        setTask(data);
      } catch (error) {
        console.error('Failed to fetch task:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!task) return <NotFound/>;

  return <TaskDetails task={task} />;
};

export default TaskPage;