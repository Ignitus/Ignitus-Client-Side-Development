import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../ignitus-Navigation";
import Footer from "../ignitus-Footer";

import Contributors from "../ignitus-Contributors";
import GetStarted from "../ignitus-GetStarted";
import Introduction from "../ignitus-Introduction";
import Testimonial from "../ignitus-Testimonial";
import WhatWeProvide from "../ignitus-WhatWeDo";
import Partner from "../ignitus-Partners";

import LoginProfessor from "../ignitus-Authentication/ignitus-ProfessorLogin";
import SignupProfessor from "../ignitus-Authentication/ignitus-ProfessorSignUp";
import LoginStudent from "../ignitus-Authentication/ignitus-StudentLogin";
import SignupStudent from "../ignitus-Authentication/ignitus-StudentSignUp";
import { CommonLoginUI, CommonSignUpUI } from "../ignitus-Authentication/ignitus-Common-Auth-Student-Prof/Components/commonLoginRegister";

import loader from "../ignitus-Assets/Images/loader2.gif";
import Loadable from "react-loadable";

import {Notfound} from './notFound';
import JobConfirmation  from "../ignitus-Careers/ignitus-JobConfirmation";

// RouteBased CodeSplitting.

const Loading = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  </div>
);

const AboutUs = Loadable({
  loader: () => import("../ignitus-About/Components/About"),
  loading: Loading
});

export const PublicRoutes = props => {
  return (
    <React.Fragment>
      <Navigation.components.Navigation id={35} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="content">
              <Introduction.components.Introduction />
              <WhatWeProvide.components.WhatWeProvide />
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
        <Route path="/jobConfirmation" component={JobConfirmation.components.JobConfirmation} />
        <Route
          path="/"
          component={Notfound}
        />
      </Switch>
      <Footer.components.Footer />
    </React.Fragment>
  );
};
