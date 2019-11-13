import React, { Component } from "react";
import gs1 from '../assets/gettingStarted1.png';
import gs2 from '../assets/gettingStarted2.png';
import gs3 from '../assets/gettingStarted3.png';
import gs4 from '../assets/gettingStarted4.png';

export default class GettingStarted extends Component {
  render() {
    return (
      <div>
        <h1 className="GettingStarted">Getting Started</h1>

        <div>
          <div className="gettingStartedMainDiv">
            <div className="gettingStartedDivPic1"><img src={gs1} alt="gs1" className="gsPics"/></div>
            <div className="gettingStartedDiv1">
              <h3>Step 1</h3>
              <p>
                When Downloading the REACT it is way simpler than you think.
                Using a command line, and putting in the command in the terminal
                will install the APP. If using NPM there is only 3 codes you
                need to use.
              </p>
              <h3 style={{ color: "#05d9fe" }}> npm install --save react </h3>
            </div>
          </div>
          <div className="gettingStartedMainDiv">
            <div className="gettingStartedDivPic1"><img src={gs2} alt="gs2" className="gsPics"/></div>
            <div className="gettingStartedDiv1">
              <h3>Step 2</h3>
              <p>
                Create React App is a tool built by developers at Facebook to
                help you build React applications. It saves you from
                time-consuming setup and configuration. You simply run one
                command and create react app sets up the tools you need to start
                your React project.
              </p>
              <h3 style={{ color: "#05d9fe" }}>create-react-app newApp</h3>
            </div>
          </div>
          <div className="gettingStartedMainDiv">
            <div className="gettingStartedDivPic1"><img src={gs3} alt="gs3" className="gsPics"/></div>
            <div className="gettingStartedDiv1">
              <h3>Step 3</h3>
              <p>
                Create React App is a comfortable environment for learning
                React, and is the best way to start building a new single-page
                application in React.
                <br />
                <br />
                It sets up your development environment so that you can use the
                latest JavaScript features, provides a nice developer
                experience, and optimizes your app for production. You’ll need
                to have:
              </p>
              <h3 style={{ color: "#05d9fe" }}>
                {" "}
                Node >= 8.10 and npm >= 5.6 on your machine.{" "}
              </h3>
            </div>
          </div>
          <div className="gettingStartedMainDiv">
            <div className="gettingStartedDivPic1"><img src={gs4} alt="gs4" className="gsPics"/></div>
            <div className="gettingStartedDiv1">
              <h3>Step 4</h3>
              <p>
                Installing ReactJS using webpack and babel
                <br />
                Step 1 - Create the Root Folder. ...
                <br />
                Step 2 - install React and react dom. ...
                <br />
                Step 3 - Install webpack. ...
                <br />
                Step 4 - Install babel. ...
                <br />
                Step 5 - Create the Files. ...
                <br />
              </p>
              <h3 style={{ color: "#05d9fe" }}>
                To show your created app run npm start or yarn start
              </h3>
            </div>
          </div>
        </div>
        <div className="gettingStartedVideoDiv1">
        <iframe width="1060" height="620" src="https://www.youtube.com/embed/6HYPSHEfXco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="gsvid"></iframe>
        </div>
      </div>
    );
  }
}
