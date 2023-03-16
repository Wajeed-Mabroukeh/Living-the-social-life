import './Centersidebarwidget.css'

import AllSidebarwidget from './Components/AllSidebarwidget/AllSidebarwidget'
import H2Title from './Components/H2Title/H2Title'

function Centersidebarwidget() {
    return (
      <div className="Centersidebarwidget">
      <H2Title/>
      <AllSidebarwidget/>
      </div>
    );
  }
  
  export default Centersidebarwidget;