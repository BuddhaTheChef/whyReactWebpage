import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{position: 'relative', bottom: '0px', background: 'slategray', width: '100%', height: '230px', boxShadow: '0px 0px 10px black', fontSize: '19px', color: '#05d9fe'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h3>Contributors:</h3>
                <ul>
                    <li>Kayleah</li>
                    <li>Ryan</li>
                    <li>Venus</li>
                    <li>Daniel</li>
                    <li>AJ</li>
                </ul>
                </div>
                <h3>ITC 134 React web page</h3>
                <h3>Year Up / Seattle Central College</h3>
                <h3>Copyright &#169; 2019</h3>
                </div>
            </div>
        )
    }
}
