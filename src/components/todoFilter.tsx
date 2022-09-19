import React, { FC } from 'react';
import { IFilter } from '../types/types';

interface IProps {
  options: IFilter[],
  value: string,
  onChange(event: string): void;
}

const TodoFilter: FC<IProps> = ({ options, value, onChange }) => {
  return (
    <div className="todo-filter">
      <select
        defaultValue={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.name}</option>
        })}
      </select>
    </div>
  );
}

export default TodoFilter;