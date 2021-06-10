import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled, { css } from 'styled-components';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const TodoListItem = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    border-top: 1px solid #dee2e6;
    &:nth-child(even) {
      background: #f8f9fa;
    }
  `;
  const CheckBox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-center: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }

      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  `;
  const Text = styled.div`
    margin-left: 0.5rem;
    flex: 1;
  `;
  const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &hover {
      color: #ff8787;
    }
  `;

  const { id, text, checked } = todo;
  return (
    <TodoListItem>
      <CheckBox onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItem>
  );
};

export default React.memo(TodoListItem);
