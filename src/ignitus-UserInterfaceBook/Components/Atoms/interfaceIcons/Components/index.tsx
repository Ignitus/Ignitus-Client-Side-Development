import React from 'react';
import * as I from '../styles';
import {StyledHeading2} from '../../../../styles';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';
import { Heading4 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {
  SocialIcons,
  DashboardIcons,
  GeneralIcons,
  IgnitusLogos,
} from '../constants';


export const interfaceIcons: React.FC = () => (
  <I.IconsContainer>
    <Heading4>We are mainly using the Material Rounded Icon Library and some other icons from Flaticon and Fa-Fa icons.</Heading4>
    <StyledHeading2>Social Icons <span role="img" aria-label="paint">🎨</span></StyledHeading2>
    <IconsMapper icons={SocialIcons} />
    <hr />
    <StyledHeading2>Dashboard Icons</StyledHeading2>
    <IconsMapper icons={DashboardIcons} />
    <hr />
    <StyledHeading2>General Icons</StyledHeading2>
    <IconsMapper icons={GeneralIcons} />

    <hr />
    <StyledHeading2>Ignitus Logos</StyledHeading2>
    <IconsMapper icons={IgnitusLogos} />
  </I.IconsContainer>
);

const IconsMapper: Function = ({icons}: {icons: AppIcon[]}): JSX.Element[] => icons.map((icon: AppIcon) => <I.StyledIcon name={icon} />);
