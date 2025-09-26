import NavBar from "./Component/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'




function Dashboard() {
    return(
        <>
        <div className="p-10">
            <h1 className="text-3xl">Dashboard</h1>
            <div className="flex  justify-between">
                <div className="bg-green-100 border-green-100 rounded-md border p-2 w-[45%] h-20">
                    <div className="flex justify-between"><p className="text-gray-600">Income</p> <FontAwesomeIcon className="text-white bg-green-400 rounded-[50%] px-1 py-1 text-xs" icon={faArrowDown} /></div>
                  
                    <p className="font-bold text-[20px]">$0.00</p>
                </div>
                <div className="bg-red-100 border-red-100 rounded-md border p-2 w-[45%]">
                    <div className="flex justify-between" ><p className="text-gray-600">Expenses</p> <FontAwesomeIcon className="text-white bg-red-400 rounded-[50%] px-1 py-1 text-xs" icon={faArrowUp} /></div>
                    <p className="font-bold text-[20px]">$0.00</p>
                </div>
            </div>
            <div className="rounded-md mt-3 border h-30">
                <div>

                </div>
                <div>
                    
                </div>
            </div>
            <div className="mt-3">
                <div className="flex justify-between">
                    <h1>Recent Transaction</h1>
                    <p>See all</p>
                </div>
                <div className="rounded-md mt-3 border">
                    <div className="border-b p-3">Transactio</div>
                     <div className="border-b p-3">Transactio</div>
                      <div className="border-b p-3">Transactio</div>
                       <div className="border-b p-3">Transactio</div>

                </div>
            </div>
        </div>
        <NavBar/>
        </>
    )

}
export default Dashboard;