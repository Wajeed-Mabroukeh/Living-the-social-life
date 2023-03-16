import './Thirdcenterbody.css'

import  Recentmain from './Components/Recentmain/Recentmain'
import  Recentsecondary from './Components/Recentsecondary/Recentsecondary'

function Thirdcenterbody() {
    return (
     <>
     <article className="article-recent">
        <Recentmain/>
        <Recentsecondary/> 
     </article>
     </>
    );
  }
  
  export default Thirdcenterbody;