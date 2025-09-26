
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import BalanceCircle from "./Component/BalanceCircle";
 


function Dashboard() {
    return(
        <>
        <div className="p-10 ">
            <h1 className="text-3xl">Dashboard</h1>
            <div className="flex  justify-between">
                <div className="bg-green-100 border-green-100 rounded-[14px] border p-2 w-[45%] h-20">
                    <div className="mt-1 flex justify-between"><p className="text-gray-600 text-[15px]">Income</p> <FontAwesomeIcon className="text-white bg-green-400 rounded-full px-[2px] py-[2px] text-[10px]" icon={faArrowDown} /></div>
                  
                    <p className="font-bold text-[20px]">$0.00</p>
                </div>
                <div className="bg-red-100 border-red-100 rounded-[14px] border p-2 w-[45%]">
                    <div className="mt-1 flex justify-between" ><p className="text-[15px] text-gray-600">Expenses</p> <FontAwesomeIcon className="text-white bg-red-400 rounded-full px-[2px] py-[2px] text-[10px]" icon={faArrowUp} /></div>
                    <p className="font-bold text-[20px]">$0.00</p>
                </div>
            </div>
            <div className="flex justify-between bg-blue-50 border-blue-50 rounded-[14px] px-2 mt-3 border h-30">
                <div>
                    <h1>Reaming balance</h1>
                    <p></p>
                </div>
                <div>
                    <BalanceCircle income={5000} expenses={2000}/>
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
       
        </>
    )

}
export default Dashboard;