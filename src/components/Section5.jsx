import React, {Component} from 'react';
import emailjs from "emailjs-com";

class Section5 extends Component {
    render() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_d14dvrw', 'template_dvb6kym', e.target, 'user_aosIPpcQcPUj7hZW5sFJ9')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
    
    }
        
      return (
        <div className="sec5" id="contact">
            <div id="r-content">
                <h2>Book a walk or ask a question:</h2>
                <br/>
                <h5>Phone: (703) 577-3684</h5>
                <h5> Email: kirbyandpals@gmail.com</h5>

            </div>
            <form onSubmit={sendEmail} >
                <div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control input" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control input" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control input" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control input" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
          
              
        </div>
      )
    }
}
export default Section5;