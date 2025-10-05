
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
   
    return(
        <>
      <nav className="bottom-0 h-15 items-center fixed w-full border-t bg-[#f2f2f2] flex justify-between px-5 text-gray-600 text-[18px] dark:bg-gray-900 lg:hidden">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-black dark:text-white" : "text-gray-600 "}><FontAwesomeIcon icon={faHouse} /></NavLink>
                <NavLink to="/transactions" className={({ isActive }) => isActive ? "text-black dark:text-white" : "text-gray-600 "}><FontAwesomeIcon icon={faListUl} /></NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? "text-black dark:text-white" : "text-gray-600 "}><FontAwesomeIcon icon={faGear} /></NavLink>               
       </nav>
        <nav className="hidden lg:flex flex-col absolute w-[24%] h-[100%] pt-8 pl-8 rounded-sm bg-[#f2f2f2] text-gray-600 text-[18px] dark:bg-gray-900 gap-12 rounded-r-2xl">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-black text-[22px] dark:text-white" : "text-gray-600 text-[22px] "}><FontAwesomeIcon icon={faHouse} /> Dashboard</NavLink>
                <NavLink to="/transactions" className={({ isActive }) => isActive ? "text-black text-[22px] dark:text-white" : "text-[22px] text-gray-600 "}><FontAwesomeIcon icon={faListUl} /> Transactions</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? "text-black text-[22px] dark:text-white" : "text-[22px] text-gray-600 "}><FontAwesomeIcon icon={faGear} /> Settings</NavLink>               
       </nav>
        </>
    );
}
export default NavBar;