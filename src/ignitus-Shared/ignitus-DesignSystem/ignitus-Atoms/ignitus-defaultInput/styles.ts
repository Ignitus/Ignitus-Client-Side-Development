import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';

export const Input = styled.input`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${C.GreyLight};
  padding-left: 2rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.XL};
  border: none;
  border-radius: 17px;
  outline: none;
  margin: 0.3rem 0;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.MD};
    opacity: 0.5;
  }
`;
