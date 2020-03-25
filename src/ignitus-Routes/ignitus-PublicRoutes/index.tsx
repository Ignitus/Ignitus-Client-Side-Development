import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation';
import Footer from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Footer';

import Contributors from '../../ignitus-HomePage/ignitus-Contributors';
import GetStarted from '../../ignitus-HomePage/ignitus-GetStarted';
import Introduction from '../../ignitus-HomePage/ignitus-Introduction';
import Testimonial from '../../ignitus-HomePage/ignitus-Testimonial';
import WhatWeDo from '../../ignitus-HomePage/ignitus-WhatWeDo';
import Partner from '../../ignitus-HomePage/ignitus-Partners';

// We will seperate these routes to seperate files in upcoming days.
import LoginProfessor from '../../ignitus-Authentication/ignitus-ProfessorLogin';
import SignupProfessor from '../../ignitus-Authentication/ignitus-ProfessorSignUp';
import LoginStudent from '../../ignitus-Authentication/ignitus-StudentLogin';
import SignupStudent from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-StudentSignUp';
import {
  CommonLoginUI,
  CommonSignUpUI,
} from '../../ignitus-Authentication/ignitus-CommonAuthenticationInterface/Components';

import {InterestFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-InterestFlow/Components/index';
import {EmailFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-EmailFlow/Components';
import {WelcomeFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-WelcomeFlow/Components';
import {EmailConfirmationFlow} from '../../ignitus-Authentication/ignitus-StudentSignUpFlow/ignitus-EmailConfirmationFlow/Components';

import loader from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/ignitusLoader.gif';
import Loadable from 'react-loadable';
import {Notfound} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components';
import JobConfirmation from '../../ignitus-Careers/ignitus-JobConfirmation';

// RouteBased CodeSplitting.

const Loading = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  </div>
);

const AboutUs = Loadable({
  loader: () =>
    import('../../ignitus-AboutPage/ignitus-About/Components/About'),
  loading: Loading,
});

export const PublicRoutes = () => {
  return (
    <React.Fragment>
      <Navigation.components.Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="content">
              <Introduction.components.Introduction />
              <WhatWeDo.components.WhatWeDo />
              <Contributors.components.Contributors />
              <Partner.components.Partner />
              <Testimonial.containers.TestimonialContainer />
              <GetStarted.components.GetStarted />
            </div>
          )}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route
          path="/login/professor"
          component={LoginProfessor.components.Login}
        />
        <Route
          path="/signup/professor"
          component={SignupProfessor.components.Signup}
        />
        <Route
          path="/login/student"
          component={LoginStudent.containers.Login}
        />
        <Route
          path="/signup/student"
          component={SignupStudent.containers.Signup}
        />
        <Route path="/Signup" component={CommonSignUpUI} />
        <Route path="/Login" component={CommonLoginUI} />
        <Route
          path="/jobConfirmation"
          component={JobConfirmation.components.JobConfirmation}
        />

        <Route
          path="/flow/emailConfirmationFlow"
          component={EmailConfirmationFlow}
        />
        <Route path="/flow/emailFlow" component={EmailFlow} />
        <Route path="/flow/interestFlow" component={InterestFlow} />
        <Route path="/flow/welcomeFlow" component={WelcomeFlow} />

        <Route path="/" component={Notfound} />
      </Switch>
      <Footer.components.Footer />
    </React.Fragment>
  );
};
