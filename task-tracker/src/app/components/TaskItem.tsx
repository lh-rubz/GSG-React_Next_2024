"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li className="task-item">
      <Link href={`/task/${task.id}`} className="block">
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className={`p-1 rounded-full ${task.completed ? 'bg-green-700' : 'bg-gray-200'} transition-colors`}>
              {task.completed ? (
                <Image src="/checkmark.png" alt="Completed" width={30} height={30} />
              ) : (
                <Image src="/clock.png" alt="Pending" width={30} height={30} />
              )}
            </div>
            <div>
              <p className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task.title}</p>
              <p className="text-sm text-gray-500">Priority: <span className={`font-medium ${{
                High: 'text-red-600',
                Medium: 'text-yellow-600',
                Low: 'text-green-600',
              }[task.priority]}`}>{task.priority}</span></p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default TaskItem;