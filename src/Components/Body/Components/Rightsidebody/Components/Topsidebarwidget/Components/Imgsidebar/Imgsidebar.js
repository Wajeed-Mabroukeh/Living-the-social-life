import './Imgsidebar.css'

import about from '../../../../../../../../assest/img/about-me.jpg'

function Imgsidebar() {
    return (
      <>
       <img src={about} alt="" className="widget-image" />
      </>
    );
  }
  
  export default Imgsidebar;