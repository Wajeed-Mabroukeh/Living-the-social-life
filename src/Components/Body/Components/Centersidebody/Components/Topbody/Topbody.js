import './Topbody.css'

import Image_top_body from './Components/Image_top_body/Image_top_body';
import Date_top_body from './Components/Date_top_body/Date_top_body';
import H1_top_body from './Components/H1_top_body/H1_top_body';
import P_top_body from './Components/P_top_body/P_top_body';
import Footer_A_top_body from './Components/Footer_A_top_body/Footer_A_top_body';

function Topbody() {
    return (
     <article className="article-featured">
    <Image_top_body/>
    <Date_top_body/>
    <H1_top_body/>
    <P_top_body/>
    <Footer_A_top_body/>
     </article>
    );
  }
  
  export default Topbody;