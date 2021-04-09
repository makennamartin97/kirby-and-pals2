import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <nav className="navbar navbar-expand-lg navbar-light " style={{opacity: '90%', backgroundColor: "#89C7E7"}}>
        <div className="text-dark mr-auto creds">
                <a href="https://www.flaticon.com/authors/good-ware" className="text-dark cred1">Icon by <u>Good Ware </u></a>
                <a href="https://www.flaticon.com/" title="Flaticon" className="text-dark cred1" >from <u>Flaticon</u></a>
            </div>
            
            <a className="navbar-brand text-dark ml-auto cred2" href="https://www.makennamartin.dev">© 2020 - Website by <u>Makenna Martin</u></a>
            
        
        

        </nav>

      </div>
        );
  }
}

export default Footer;
