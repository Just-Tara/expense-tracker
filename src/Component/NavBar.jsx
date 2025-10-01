
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
   
    return(
        <>
      <nav className="bottom-0 h-15 items-center fixed w-full border flex justify-between px-5 text-gray-600 text-[18px] dark:bg-gray-900">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-black dark:text-white" : "text-gray-600 "}><FontAwesomeIcon icon={faHouse} /></NavLink>
                <NavLink to="/transactions" className={({ isActive }) => isActive ? "text-black dark:text-white" : "text-gray-600 "}><FontAwesomeIcon icon={faListUl} /></NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? "text-black dark:text-white" : "text-gray-600 "}><FontAwesomeIcon icon={faGear} /></NavLink>               
       </nav>
        </>
    );
}
export default NavBar;