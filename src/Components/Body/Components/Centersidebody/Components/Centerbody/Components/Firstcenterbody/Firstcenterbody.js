import './Firstcenterbody.css'

import  Recentmain from './Components/Recentmain/Recentmain'
import  Recentsecondary from './Components/Recentsecondary/Recentsecondary'


function Firstcenterbody() {
    return (
     <article className="article-recent">
        <Recentmain/>
        <Recentsecondary/> 
     </article>
    );
  }
  
  export default Firstcenterbody;