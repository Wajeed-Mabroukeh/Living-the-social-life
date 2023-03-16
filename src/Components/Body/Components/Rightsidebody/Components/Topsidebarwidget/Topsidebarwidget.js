import './Topsidebarwidget.css'


import H2Title from './Components/H2Title/H2Title'
import Imgsidebar from './Components/Imgsidebar/Imgsidebar'
import Psidebar from './Components/Psidebar/Psidebar'

function Topsidebarwidget() {
    return (
      <div class="sidebar-widget">
        <H2Title/>
        <Imgsidebar/>
        <Psidebar/>
      </div>
    );
  }
  
  export default Topsidebarwidget;