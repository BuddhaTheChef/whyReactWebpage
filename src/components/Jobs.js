import React, { Component } from "react";
import React1 from '../assets/react1.png'
import React2 from '../assets/react2.png'
import React3 from '../assets/react3.png'
import React4 from '../assets/react4.png'
import React5 from '../assets/react5.png'
import React6 from '../assets/react6.png'
import React7 from '../assets/react7.png'
import React8 from '../assets/react8.png'

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', fontSize: '50px'}}>Jobs</h1>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React1} className="picJob" alt="job pic"/></div>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React2} className="picJob" alt="job pic"/></div>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React3} className="picJob" alt="job pic"/></div>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React4} className="picJob" alt="job pic"/></div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React5} className="picJob" alt="job pic"/></div>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React6} className="picJob" alt="job pic"/></div>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React7} className="picJob" alt="job pic"/></div>
              <div style={{display: 'inline-flex', background: 'gray', height: '350px', width:'24%'}}><img src={React8} className="picJob" alt="job pic"/></div>
          </div>
        <div style={{color:'#05d9fe',background: 'slategray', width: '80%', display: 'flex', alignItems: 'center', margin: '50px auto', padding: '30px', lineHeight: '2', fontSize: '20px', borderRadius: '4px', border: 'whitesmoke 1px solid', textAlign: 'center', fontWeight: 'bolder',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          The average React Js Developer salary in the USA is $125,000 per year
          or $64.10 per hour. Entry-level positions start at $63,050 per year
          while most experienced workers make up to $195,000 per year.
          </div>
          <div style={{background: 'slategray', width: '80%', display: 'flex', alignItems: 'center', margin: '50px auto', padding: '30px', lineHeight: '2', fontSize:'20px', borderRadius: '4px', border: 'whitesmoke 1px solid', boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
           React on
          and by itself is a fast thing to learn, especially considering you are
          a developer or at least have some familiarity with writing code.
         </div>
          <div style={{background: 'slategray', width: '80%', display: 'flex', alignItems: 'center', margin: '50px auto', padding: '30px', lineHeight: '2', flexDirection: 'column', borderRadius: '4px', border: 'whitesmoke 1px solid',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <h3>What does a React developer do?</h3>
          React developer will be creating the
          interactive part of the web, by creating components that can send and
          receive data from a backend server. They will be responsible for the
          rendering of components which is having customized requirements.
          </div>
          <div style={{width: '100%', display: 'flex'}}>
          <div style={{background: 'slategray', width: '33%', display: 'inline-flex', alignItems: 'center', margin: '50px auto', padding: '30px', lineHeight: '2', flexDirection: 'column', borderRadius: '4px', border: 'whitesmoke 1px solid',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <h3>How long will it take?</h3>
          The short answer is it will take you between
          1-12 months of learning to become proficient with React. This depends
          on your existing software development experience, your knowledge of
          javascript and the learning path you take. The following report is based on
          39,441 responses. In short, 33 percent of employers need to have React
          skills, but only 19 percent of developers said they had known React.
          </div>
          <div style={{background: 'slategray', width: '33%', display: 'inline-flex', alignItems: 'center', margin: '50px auto', padding: '30px', lineHeight: '2', flexDirection: 'column', borderRadius: '4px', border: 'whitesmoke 1px solid',boxShadow: '0 4px 8px 7px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <h3>FACTS</h3> 
          <ul>
              <li>Since React is a JS library, there is no way around learning JavaScript.</li>
              <li>React makes heavily use of JavaScript.</li>
              <li>React JS is known to be one of the most widely used JavaScript libraries.</li>
              <li> According to SimilarTech, it's now being used on more than 90,000 websites.</li>
          </ul> 
          </div>
          </div>
      </div>
    );
  }
}
