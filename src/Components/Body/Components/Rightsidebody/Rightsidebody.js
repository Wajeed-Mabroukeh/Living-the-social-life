import './Rightsidebody.css'

import Topsidebarwidget from './Components/Topsidebarwidget/Topsidebarwidget'
import Centersidebarwidget from './Components/Centersidebarwidget/Centersidebarwidget'



function Rightsidebody() {
    return (
     <aside className="sidebar">
      <Topsidebarwidget/>
      <Centersidebarwidget/>
     </aside>
    );
  }
  
  export default Rightsidebody;