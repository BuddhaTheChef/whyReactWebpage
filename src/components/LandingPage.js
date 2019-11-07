import React, { Component } from "react";
import reactBackground from '../assets/reactImg2.png';

var sectionStyle = {
  width: "100%",
  height: "500px",
  backgroundSize: 'cover',
  backgroundImage:  `url(${reactBackground})`
};

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={{textAlign: 'center', fontSize: '80px'}}>Why React?</h1>
        </div>
        <section style={ sectionStyle }></section>
        <div class="landing-page-divs">
          <h3 style={{color: '#09b7d6', fontSize: '2em'}}>Whats is React</h3>
          <p>
            React (also known as React.js or ReactJS) is a JavaScript library
            for building user interfaces. It is maintained by Facebook and a
            community of individual developers. React can be used as a base in
            the development of single-page or mobile applications, as it is
            optimal for fetching rapidly changing data that needs to be
            recorded. However, fetching data is only the beginning of what
            happens on a web page, which is why complex React applications
            usually require the use of additional libraries for state
            management, routing, and interaction with an API, Redux, React
            Router, and axios are examples of such libraries.
          </p>
        </div>
        <div class="combine-div">
        <div style={{flexDirection: 'column', width: 'inherit', justifyContent: 'start', display: 'flex'}}>
        <div class="landing-page-divs-2">
          <h3 style={{color: '#09b7d6', fontSize: '2em'}}>Where did React come from?</h3>
          <div>
            <p>
              React was created by Jordan Walke, a software engineer at
              Facebook, who released an early prototype called "FaxJS". He was
              influenced by XHP, an HTML component framework for PHP. It was
              first deployed on Facebook's News Feed in 2011 and later on
              Instagram in 2012.
            </p>
          </div>
        </div>
        <div class="landing-div-content">
          <pre>
            <code>
            &lt;script&gt;
            <br/>
            <br/>
              ReactDOM.render(
                <br/>
                &lt;h1&gt;Hello React!&lt;/h1&gt;,
                <br/>
                  document.getElementById(&quot;root&quot;)
                  <br/>
                );
                <br/>
                <br/>
            &lt;script&gt;
            </code>
            </pre>
        </div>
        </div>
        <div class="landing-page-divs-pc">
          <h3 style={{color: '#09b7d6'}}>Pros and Cons of React</h3>
          <h4 style={{color: '#09b7d6'}}>Advantage of ReactJS</h4>
          <ol>
            <li>Easy to Learn and Use</li>
            <li>Creating Dynamic Web Applications Becomes Easier</li>
            <li>Reusable Components</li>
            <li>Performance Enhancement</li>
            <li>The Support of Handy Tools</li>
            <li>Known to be SEO Friendly </li>
            <li>The benefit of Having JavaScript Library</li>
            <li>Scope for Testing the Codes</li>
          </ol>
          <h4 style={{color: '#09b7d6'}}>Disadvantage of ReactJS</h4>
          <ol>
              <li>The high pace of development</li>
              <li>Poor Documentation</li>
              <li>View Part</li>
              <li>JSX as a barrier</li>
          </ol>
        </div>
        </div>
        <div class="landing-page-divs">
            <h3 style={{color: '#09b7d6', fontSize: '2em'}}>What is JSX?</h3>
            <p>
            Basically, by using JSX you can write concise HTML/XML-like structures
             (e.g., DOM like tree structures) in the same file as you write JavaScript 
             code, then Babel will transform these expressions into actual JavaScript code.
              Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.
            </p>
        </div>
      </div>
    );
  }
}


export default LandingPage;
