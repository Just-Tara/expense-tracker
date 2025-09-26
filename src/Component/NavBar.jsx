import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "../Dashboard.jsx"
import TransactionPage from "../TransactionPage.jsx";
import Settings from "../Settings.jsx";
import TransactionForm from "../TransactionForm.jsx";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    return(
        <>
    <BrowserRouter>
      <nav className="bottom-0 h-15 items-center fixed w-full border flex justify-between px-10 text-gray-600">
                <Link to="/" className="text-[18px]"><FontAwesomeIcon icon={faHouse} /></Link>
                <Link to="/transactions" className="text-[18px]"><FontAwesomeIcon icon={faListUl} /></Link>
                <Link to="settings" className="text-[18px]"><FontAwesomeIcon icon={faGear} /></Link>               
       </nav>

       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/transactions" element={<TransactionPage/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/add-transaction" element={<TransactionForm/>}/>
       </Routes>
    </BrowserRouter>
   
     
        </>
    );
}
export default NavBar;