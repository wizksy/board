import React from 'react';
import styled, { css } from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const TodoList = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
  `;

  return (
    <TodoList>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoList>
  );
};

export default TodoList;
