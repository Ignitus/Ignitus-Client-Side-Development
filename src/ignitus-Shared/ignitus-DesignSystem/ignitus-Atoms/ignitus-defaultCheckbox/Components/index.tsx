import React from 'react';
import { CheckBoxType } from '../types';
import { CheckBox, Label, StyledParagraph, Container } from '../styles';

export const DefaultCheckbox = ({
  label,
  value,
  checkBoxProps,
  textProps,
}: CheckBoxType) => (
  <Container>
    <CheckBox
      {...checkBoxProps}
      type="checkbox"
      id={label}
      name={label}
      value={value}
    />
    <Label htmlFor={label}>
      <StyledParagraph {...textProps}>{label}</StyledParagraph>
    </Label>
  </Container>
);
