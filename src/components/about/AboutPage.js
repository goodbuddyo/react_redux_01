import React from "react";


const AboutPage = () => (
  <div className="container so-midSection so-whiteBG">
    <h2>About</h2>
    <p>
      5-5s.com is a test app in beta, a proof of concept based on an excellent Pluralsight course by Corey House called    
      <a href="https://app.pluralsight.com/courses/react-redux-react-router-es6/description" rel="noopener" className="link">
        <span> Building Applications with React and Redux. </span>
      </a> It uses Webpack and a local mock data store that is periodically cleared so PLEASE remember to <strong>COPY AND SAVE YOUR LIST!!</strong>
    </p>

    <p>
    A common challenge occurs in many web departments that move rapidly from one project to the next. 
    Limited resources, a constant flow of requests and tight deadlines can make even basic site maintenance difficult. 
    Neglecting standard site maintenance can negatively affect site perfrmance and the user experience. 
    </p>

    <div className="justify-content-center so-aboutImg-div">
      <img src="/static/img/TaskList460_250.gif" className="so-aboutImg" />
    </div>
    

    <p> 5-5s.com offers a 5 step process to help website managers identify and prioritize necessary maintenance items. By systematically considering common site maintenance areas with references to related articles, site managers have a practical tool for addressing standard site maintenance, improving the user expreience and working toward higher user ratings.
    </p>

    <p>
    The goal for this site is to iteratively improve the 5 step process. Please check back for updates.
    </p>
  </div>
);

export default AboutPage;
