import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {CardLayoutContainer, Section} from '../style';
import Opportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';
import OpportunityFilters from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-filterComponents/OpportunityFilters/OpportunityFilters';
import { ProfileCard } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-ProfileCard/Components';

export const interfaceOpportunity: React.FC = () => (
  <CardLayoutContainer>
    <StyledHeading2>Opportunity</StyledHeading2>
    <hr />
    <Opportunity />

    <Section>
      <ProfileCard />
    </Section>

    <OpportunityFilters />
  </CardLayoutContainer>
);
