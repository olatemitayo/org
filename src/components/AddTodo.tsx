import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/todoState';
import PlusIcon from '../assets/PlusIcon';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useRecoilState(todoState);

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
    setText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className='flex items-center space-x-4 mb-2 w-full cursor-pointer  mt-8 '>
        <PlusIcon />
      <div className="flex items-center w-full relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Memorize the dictionary'
          className="flex-1 border-t border-b rounded-l p-2 focus:outline-none h-12"
        />
        <button
          onClick={addTodo}
          disabled={text.trim() === ''}
          className={`px-4 py-2 rounded-lg absolute right-0 text-white ${
            text.trim() === '' ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-500  hover:bg-purple-600'
          }`}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
