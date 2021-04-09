import React, {Component} from 'react';
import Typical from 'react-typical';
import Wave1 from './Random.jsx';



class Section1 extends Component {
    render() {

      return (
        <div className="sec1" >
          <div className="back">
            <div className="name animated fadeIn">
              <Typical
              steps={[2000, 'Northern Virginia dog walking service', 2000]}
              loop={1}
              wrapper="h4"
              />
            </div>
            <Wave1/>
            
          </div>
            
              
        </div>
      )
    }
}
export default Section1;