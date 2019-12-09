import React, {Component} from 'react';
import './App.css';


class Contact extends Component{
render() {
    return (
      <div>
      <table classname="contact" >
       <tr><th colSpan='4' align="center"></th></tr>
        <tr>
          <td><i className="fa fa-phone-square" aria-hidden="true"/></td>
          <td align='left' colSpan='3'>+91 8867964857</td>
          </tr>

        <tr>
           <td><i className="fa fa-envelope" aria-hidden="true"/></td>
           <td align='left'>tripthibhaskar@gmail.com</td>
           <td align='left'>|</td>
           <td colSpan='2' align='left'>tripthi.palan@learner.manipal.edu</td>
         </tr>
         <tr>
           <td><i className="fa fa-skype" aria-hidden="true"/></td>
           <td align='left'colSpan='3'>live:tripthibhaskar</td>
         </tr>
         <tr>
           <td><i class="fa fa-map-marker" aria-hidden="true"/></td>
           <td align='left'colSpan='3'>'Sima Complex', Gundibail Udupi 576102</td>
         </tr>
         

       </table>
    </div>
  );
}
}


export default Contact;
