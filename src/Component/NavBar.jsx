
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
   
    return(
        <>
      <nav className="bottom-0 h-15 items-center fixed w-full border flex justify-between px-5 text-gray-600">
                <Link to="/" className="text-[18px]"><FontAwesomeIcon icon={faHouse} /></Link>
                <Link to="/transactions" className="text-[18px]"><FontAwesomeIcon icon={faListUl} /></Link>
                <Link to="/settings" className="text-[18px]"><FontAwesomeIcon icon={faGear} /></Link>               
       </nav>
        </>
    );
}
export default NavBar;