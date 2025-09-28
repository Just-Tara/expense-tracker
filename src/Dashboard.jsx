
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import BalanceCircle from "./Component/BalanceCircle";
import { useTransactions } from './Context/TransactionContext'; 
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const {transactions} = useTransactions();
    const navigate = useNavigate();
    navigate("/transactions");

    const income = transactions.filter((t) => t.type === "income").reduce((acc, curr) => acc + curr.amount, 0);

    const expenses = transactions.filter((t) => t.type === "expense").reduce((acc, curr) => acc + curr.amount, 0);
    const balance = income - expenses;    
    return(
        <>
        <div className="p-5 bg-[#f2f2f2] h-[100vh] ">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="flex  justify-between">
                <div className="bg-green-200 border-green-200 rounded-[14px] border p-2 w-[45%] h-20">
                    <div className="mt-1 flex justify-between"><p className="text-gray-600 text-[15px]">Income</p> <FontAwesomeIcon className="text-white bg-green-400 rounded-full px-[2px] py-[2px] text-[10px]" icon={faArrowDown} /></div>
                  
                    <p className="font-bold text-[20px]">${income.toLocaleString()}</p>
                </div>
                <div className="bg-red-200 border-red-200 rounded-[14px] border p-2 w-[45%]">
                    <div className="mt-1 flex justify-between" ><p className="text-[15px] text-gray-600">Expenses</p> <FontAwesomeIcon className="text-white bg-red-400 rounded-full px-[2px] py-[2px] text-[10px]" icon={faArrowUp} /></div>
                    <p className="font-bold text-[20px]">${expenses.toLocaleString()}</p>
                </div>
            </div>
            <div className="flex justify-between bg-[#95a5a6] border-blue-50 rounded-[14px] px-2 mt-3 border h-30">
                <div>
                    <h1>Remaining balance</h1>
                    <p>${balance.toLocaleString()}</p>
                </div>
                <div>
                    <BalanceCircle income={income} expenses={expenses}/>
                </div>
            </div>
            <div className="mt-3">
                <div className="flex justify-between">
                    <h1 className='font-bold text-[17px]'>Recent Transaction</h1>
                    <p className='text-blue-500 cursor-pointer' onClick={() => navigate("/transactions")}>See all</p>
                </div>
                <div className="rounded-md mt-3 border-white">
                {transactions.length === 0 ? (
                    <p className="p-3 text-gray-500 text-center text-sm">No transactions yet. <br></br> Create your first transaction</p>
                ) : (
                    transactions.slice(0, 3).map((t) => (
                    <div key={t.id} className="bg-white rounded-[10px] p-3 mb-1 flex justify-between">
                        <div>
                        <p className="font-medium">{t.title || "Untitled"}</p>
                        <p className="text-xs text-gray-500">{t.date} {t.time}</p>
                        </div>
                        <p className={`font-semibold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                        {t.type === "income" ? "+" : "-"}₦{t.amount.toLocaleString()}
                        </p>
                    </div>
                    ))
                )}
                </div>

            </div>
        </div>
       
        </>
    )

}
export default Dashboard;