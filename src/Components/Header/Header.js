
import RightsideHeader from './Components/RightsideHeader/RightsideHeader';
import LeftsideHeader from './Components/LeftsideHeader/LeftsideHeader';

import './Header.css'

function Headers(){
    return (
    <header className='header'> 
    <nav className='left'>
    <LeftsideHeader />
    </nav>
    <nav className='right'>
    <RightsideHeader className='right'/>
    </nav>
      </header>
    );
  }

  export default Headers;