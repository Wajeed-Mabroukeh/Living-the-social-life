import './Secondcenterbody.css'

import  Recentmain from './Components/Recentmain/Recentmain'
import  Recentsecondary from './Components/Recentsecondary/Recentsecondary'

function Secondcenterbody() {
    return (
     <>
     <article className="article-recent">
        <Recentmain/>
        <Recentsecondary/> 
     </article>
     </>
    );
  }
  
  export default Secondcenterbody;