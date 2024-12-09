import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState, Todo } from '../recoil/todoState';
import CheckedIcon from '../assets/CheckedIcon';
import DeleteIcon from '../assets/DeleteIcon';
import CheckMarkIcon from '../assets/CheckMarkIcon';
import XIcon from '../assets/XIcon';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const toggleComplete = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const saveEdit = () => {
    if (editText.trim() === '') return;
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, text: editText } : item
      )
    );
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveEdit();
    }
  };

  return (
    <div className="flex items-center gap-2 transition ease-in-out duration-300 transform hover:scale-105">
      <div className="flex items-center space-x-4 mb-2 w-full">
        <div className="relative h-6 w-6" onClick={toggleComplete}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
            disabled={isEditing}
            className="absolute h-6 w-6 appearance-none border-2 border-purple-500 rounded-full checked:bg-purple-500 focus:outline-none disabled:cursor-not-allowed disabled:border-purple-300"
          />
          {todo.completed && <CheckedIcon />}
        </div>

        {isEditing ? (
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border border-gray-300 rounded p-2 focus:outline-none"
            />
            <div className='flex items-center gap-2'>
              <button
                onClick={saveEdit}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
              <CheckMarkIcon />
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
               <XIcon />
              </button>
            </div>
          </div>
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`flex-1 border-gray-100 hover:bg-gray-50 border-t-2 p-2 cursor-pointer ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      {!isEditing && (
        <div
          onClick={deleteTodo}
          className="text-red-500 hover:text-red-700 font-semibold cursor-pointer hover:bg-gray-50"
        >
          <DeleteIcon />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
