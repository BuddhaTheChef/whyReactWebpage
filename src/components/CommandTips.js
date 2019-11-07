import React, { Component } from 'react'

export default class CommandTips extends Component {
    render() {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 style={{textAlign: 'center', marginTop: '80px', fontSize: '70px', background: 'black', color: 'whitesmoke', padding: '10px 30px', fontFamily: 'Courier New'}}>Command Tips</h1>
                </div>
               <div>
                <h1 style={{textAlign: 'center', marginTop: '80px', fontSize: '70px'}}>Installing reactjs tutorial</h1>
                <div className="gettingStartedVideoDiv">
                <iframe title="commandtip1" width="960" height="520" src="https://www.youtube.com/embed/aVPOoFic1i4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
                <div className="gettingStartedDiv">
                <h2>Step 1</h2>
                    <p style={{lineHeight: '2'}}>
                    Install Nodejs. Nodejs will be critical into using React. while you download Nodejs you can create a folder for your project. Gatsby is another program you can use if you dont want to use Nodejs but this tutorial is going to be using Nodejs so i reccomend using Nodejs
                    </p>
                </div>
                <div className="gettingStartedDiv">
                <h2>Step 2</h2>
                    <p style={{lineHeight: '2'}}>
                    Next you would want to Install the reactjs modeuels using the command "npm install -g create react app". Once youve done that use the command "create-react-app " this command will check to see if reactjs is installed properly  
                    </p>
                </div>
                <div className="gettingStartedDiv">
                <h2>Step 3</h2>
                    <p style={{lineHeight: '2'}}>
                    You know want to create a new reactjs app using the command "create-react-app new app".Once you have done that you now go the project folder and use the command"cd new-app"
                    </p>
                </div>
                <div className="gettingStartedDiv">
                <h2>Step 4</h2>
                    <p style={{lineHeight: '2'}}>
                   Now you can start the server using the command "npm start". Now modify the App.js file and run it. Congratualtions you have now Installed reactjs 
                    </p>
                </div>
            
              <div>
                <h1 style={{textAlign: 'center', marginTop: '80px', fontSize: '70px'}}>Command Tips</h1>
                <div className="gettingStartedVideoDiv">
                <iframe title="commandtip2" width="960" height="520" src="https://www.youtube.com/embed/xa-_FIy2NgE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            
                <div className="gettingStartedDivPic">
                    Insert Pic Here
                </div>
                <div className="gettingStartedDiv">
                <h3>Step 6</h3>
                    <p>
                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen 
                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                      Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="gettingStartedDivPic">
                    Insert Pic Here
                </div>
                <div className="gettingStartedDiv">
                <h3>Step 7</h3>
                    <p>
                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen 
                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                      Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="gettingStartedDivPic">
                    Insert Pic Here
                </div>
                <div className="gettingStartedDiv">
                <h3>Step 8</h3>
                    <p>
                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen 
                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                      Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        )
    }
}
