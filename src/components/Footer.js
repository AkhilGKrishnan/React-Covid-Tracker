import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap';

class Footer extends Component{
  render() {
    return(
      <div className="footer-copyright text-center py-3">
         Developed By <a href="https://akhilgkrishnan.me">Akhil G Krishnan</a>
      </div>
    )
  }
}
export default Footer;