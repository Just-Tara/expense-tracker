 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faHouse} from '@fortawesome/free-solid-svg-icons'
   import {faListUl} from '@fortawesome/free-solid-svg-icons'
    import {faGear} from '@fortawesome/free-solid-svg-icons'
    



function NavBar() {
    return(
        <>
            <div className="bottom-0 h-15 items-center fixed w-full border flex justify-between px-10">
                <p className="text-[18px]"><FontAwesomeIcon icon={faHouse} /></p>
                <p className="text-[18px]"><FontAwesomeIcon icon={faListUl} /></p>
                <p className="text-[18px]"><FontAwesomeIcon icon={faGear} /></p>
                
            </div>
        </>
    );
}
export default NavBar;