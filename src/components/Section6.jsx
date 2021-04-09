import React, {Component} from 'react';
import ig from './finalig.png';
import fb from './fb.png';




class Section6 extends Component {
    render() {
      return (
        <div className="sec6" >
            <div id="socials">
                <h2>Follow Kirby&Pals!<a href="https://www.instagram.com/kirbyandpals/"><img src={ig} alt="ig" style={{height: '45px', width: '45px', padding: '5px', margin: '0px 0px 0px 10px'}}/></a><a href="https://m.facebook.com/kirbyandpals"><img src={fb} alt="fb" style={{height: '45px', width: '45px', padding: '5px',margin: '0px'}}/></a></h2>
            
              
            </div>


          
              
        </div>
      )
    }
}
export default Section6;