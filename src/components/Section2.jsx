import React, {Component} from 'react';
import paw from './print.png';
import yard from './yard.png';
import twodogs from './twodogs.jpeg';

class Section2 extends Component {
    render(

    ) {
      return (
        <div className="sec2" id="about">
            <div id="r-content">
                <h2>About Kirby & Pals<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
                
                
            </div>
            <div className="row nopadding">
              <div className="col-sm-12 col-md-5 nopadding">
                <img src={yard} alt="Dog" id="dog" />
              </div>
              <div className="col-sm-12 col-md-7 content">
                <h6><u>Hello, my name is Rachel.</u></h6>
                <p>I started Kirby & Pals in 2020, after working in corporate retail for 5 years and finding myself wanting to do something more, something I loved!  Creating Kirby & Pals has given me the opportunity to share my love and passion for animals with others. I want to create an experience where owners feel I am an extended part of their family, and comfortable knowing their four-legged loved friends are safe, supervised, and loved when they are in my care. </p>
                <img src={twodogs} alt="Dog" id="dogs" />
              </div>
            </div>
            
        </div>
      )
    }
}
export default Section2;
