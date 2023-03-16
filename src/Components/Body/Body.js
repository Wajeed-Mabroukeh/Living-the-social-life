import './Body.css'

import Centersidebody from'./Components/Centersidebody/Centersidebody';
import Rightsidebody from './Components/Rightsidebody/Rightsidebody'
function Body() {
    return (
      <div class="container container-flex">
     <Centersidebody/>
     <Rightsidebody/>
      </div>
    );
  }
  
  export default Body;