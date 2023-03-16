import './AllSidebarwidget.css'

import Sidebarwidget1 from './Components/Sidebarwidget1/Sidebarwidget1'
import Sidebarwidget2 from './Components/Sidebarwidget2/Sidebarwidget2'
import Sidebarwidget3 from './Components/Sidebarwidget3/Sidebarwidget3'




function AllSidebarwidget() {
    return (
      <div className="AllSidebarwidget">
      <Sidebarwidget1/>
      <Sidebarwidget2/>
      <Sidebarwidget3/>
      </div>
    );
  }
  
  export default AllSidebarwidget;