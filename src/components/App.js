import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import FooterOne from "./common/FooterOne";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import StepOnePage from "./courses/StepOnePage"; // eslint-disable-line import/no-named-as-default
import StepTwoPage from "./courses/StepTwoPage"; // eslint-disable-line import/no-named-as-default
import StepThreePage from "./courses/StepThreePage"; // eslint-disable-line import/no-named-as-default
import StepFourPage from "./courses/StepFourPage"; // eslint-disable-line import/no-named-as-default
import StepFivePage from "./courses/StepFivePage"; // eslint-disable-line impor/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid so-container">
      
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/stepone" component={StepOnePage} />
        <Route path="/steptwo" component={StepTwoPage} />
        <Route path="/stepthree" component={StepThreePage} />
        <Route path="/stepfour" component={StepFourPage} />
        <Route path="/stepfive" component={StepFivePage} />
        
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <FooterOne />
    </div>
  );
}

export default App;
