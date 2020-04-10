import React from 'react';
import * as C from '../styles';
import {DefaultCheckbox} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultCheckbox/Components';
import { StyledHeading2 } from '../../../../styles';

export const interfaceCheckBox: React.FC = () => (
  <C.CheckBoxContainer>
    <StyledHeading2>Check Box </StyledHeading2>
    <hr />
    <DefaultCheckbox value={'cars'} label={'cars'} />
  </C.CheckBoxContainer>
);
