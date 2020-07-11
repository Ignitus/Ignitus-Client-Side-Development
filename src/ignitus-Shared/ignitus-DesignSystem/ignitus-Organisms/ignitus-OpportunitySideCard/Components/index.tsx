import React from 'react';
import * as S from '../styles';
import { OpportunityType, CardType } from '../types';
import { Paragraph } from '../../../ignitus-Atoms/typography';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export const InfoCard = ({ location, commitment, salary }: CardType) => {
  const [applyButton, setStatus] = React.useState('Apply');
  const handleClick = () => {
    setStatus('Applied');
  };
  return (
    <S.Container>
      <Card title="Location" description={location} />
      <Card title="Commitment" description={commitment} />
      <Card title="Salary" description={salary} />
      <S.ButtonsWrapper>
        <S.Button size="large" category="primary" onClick={handleClick}>
          {' '}
          <S.ApplyStatus status={applyButton} name={AppIcon.CheckIcon} />
          {applyButton}{' '}
        </S.Button>
        <S.Button size="large" category="secondary">
          {' '}
          Save{' '}
        </S.Button>
        <S.Button size="large" category="grey">
          <S.Share name={AppIcon.ShareIcon} /> Share Link
        </S.Button>
      </S.ButtonsWrapper>
    </S.Container>
  );
};

const Card = ({ title, description }: OpportunityType) => (
  <S.Wrapper>
    <S.Heading>{title}</S.Heading>
    <br />
    <Paragraph> {description} </Paragraph>
  </S.Wrapper>
);
