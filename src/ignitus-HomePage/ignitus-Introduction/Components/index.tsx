import React from 'react';

import * as T from '../constants';
import * as I from '../styles';

import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';

export const Introduction: React.FunctionComponent = withErrorBoundary(() => (
  <I.Container>
    <I.LeftSection>
      <I.TitleImage>
        <I.Title>Welcome to Ignitus</I.Title>
        <I.Torch src={T.TORCH} alt="Ignitus Torch" />
      </I.TitleImage>
      <I.PrimaryText>
        Get handpicked top-quality global research and industrial internships,
        for <b>free!</b>
      </I.PrimaryText>
      <I.SecondaryText>
        Ignite your resume and get the <b>best global opportunities </b>
        and Skyrocketing your career
      </I.SecondaryText>
      <I.Button category="primary" size="large">
        SIGN UP
      </I.Button>
    </I.LeftSection>

    <I.RightSection>
      <I.Resume src={T.RESUME} alt="resume" />
    </I.RightSection>
  </I.Container>
));
