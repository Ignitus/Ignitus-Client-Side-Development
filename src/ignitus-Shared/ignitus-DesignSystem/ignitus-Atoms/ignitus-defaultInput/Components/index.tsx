import React from 'react';
import { InputType } from '../types';
import { Input } from '../styles';

export const DefaultInput = ({
  placeholder,
  type,
  name,
  height,
  width,
  handleChange,
}: InputType) => (
  <React.Fragment>
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={e => handleChange && handleChange(e.target.value)}
      height={height}
      width={width}
    />
  </React.Fragment>
);
