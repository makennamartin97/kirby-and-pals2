import React, {Component} from 'react';
import bone from'../bone.png';



class Navbar extends Component {

  render()
   {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{opacity: '90%', backgroundColor: "#89C7E7"}}>
            <a className="navbar-brand " href="/kirby-and-pals/" style={{color: "white"}}>Kirby & Pals</a>
            <img src={bone} alt="bone" style={{width: "28px", height: "28px", marginRight: "14px"}}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar" data-toggle="collapse" data-target=".navbar-collapse">
                <ul className="navbar-nav ml-auto" >

                    <li className="nav-item ">
                    <a className="nav-link " style={{color: "white"}} href="/kirby-and-pals/#about">About</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link " style={{color: "white"}} href="/kirby-and-pals/#reviews">Reviews</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link "  style={{color: "white"}} href="/kirby-and-pals/#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " style={{color: "white"}} href="/kirby-and-pals/#contact">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;