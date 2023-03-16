import './Recentmain.css'

import  H2Title from './Components/H2Title/H2Title'
import  Pbody from './Components/Pbody/Pbody'
import  AReadmore from './Components/AReadmore/AReadmore'

function Recentmain() {
    return (
        <div className="article-recent-main">
         <H2Title/>
         <Pbody/>
         <AReadmore/>
        </div>
    );
  }
  
  export default Recentmain;