import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';

const TodoInsert = () => {
  const TodoInsert = styled.form`
    display: flex;
    background: #495057;
  `;
  const TodoInput = styled.input`
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  `;
  const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  `;

  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <TodoInsert>
      <TodoInput
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">
        <MdAdd />
      </Button>
    </TodoInsert>
  );
};

export default TodoInsert;
