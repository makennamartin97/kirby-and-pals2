import React, {Component} from 'react';
import paw from './print.png';
import dogg from '../dog1.jpg';


class Section3 extends Component {
    render() {
      return (
        <div className="sec3" id="reviews">
            <div id="r-content">
                <h2>Reviews<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
            </div>
            <div className="content">
                <p>Leave a review or take a look at what others have to say on the new Kirby & Pals Facebook page <a href="https://m.facebook.com/kirbyandpals">here</a></p>
                
              </div>
              <img src={dogg} alt="Dog" id="doggo"/>
          
              
        </div>
      )
    }
}
export default Section3;