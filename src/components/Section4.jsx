import React, {Component} from 'react';
import paw from './print.png';


class Section4 extends Component {
    render() {
      return (
        <div className="sec4" id="pricing">
            <div id="r-content">
                <h2>Pricing<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
                <div className="details">
                  <h4>small dogs(Sm): less than 30lbs</h4>
                  <h4>large dogs(Lg): 30lbs and up</h4>
                  <h4>* Trimmings not available</h4>
                </div>
            </div>
            <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Walk</th>
                <td>$18/30min $30/hr</td>
              </tr>
              <tr>
                <th scope="row">Full Grooming Services</th>
                <td>Sm: $50 Lg: $60</td>
              </tr>
              <tr>
                <th scope="row">Brushing</th>
                <td>Sm: $10 Lg: $20</td>
              </tr>
              <tr>
                <th scope="row">Bath (Shampoo, conditioner, & drying included)</th>
                <td>Sm: $20 Lg: $40</td>
              </tr>
              <tr>
                <th scope="row">Nail Trim</th>
                <td colSpan="2">$12</td>
              </tr>
              <tr>
                <th scope="row">Ear Cleaning</th>
                <td>$8</td>
              </tr>
              
            </tbody>
          </table>
          
              
        </div>
      )
    }
}
export default Section4;