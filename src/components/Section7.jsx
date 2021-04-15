import React, {Component} from 'react';
import mickey from '../mickey.png';
import challa from '../challa.png';
import rory from '../rory.png';
import paw from './print.png';


class Section7 extends Component {
    render() {
      return (
        <div className="sec7 container" id="gallery">
            <div id="r-content">
                <h2>Gallery<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={mickey} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Mickey</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={challa} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Challa</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="card">
                        <img className="card-img-top" src={rory} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Challa</p>
                        </div>
                    </div>


                </div>

            </div>

 
          
        </div>
      )
    }
}
export default Section7;