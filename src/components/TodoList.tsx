import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/todoState';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <AddTodo />

     
    </div>
  );
};

export default TodoList;