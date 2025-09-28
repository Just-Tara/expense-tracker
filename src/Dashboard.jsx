
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import BalanceCircle from "./Component/BalanceCircle";
import { useTransactions } from './Context/TransactionContext'; 
import { useNavigate } from "react-router-dom";
import {Plus} from "lucide-react"

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
            <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="bg-green-100 border-green-100 rounded-[14px] border p-4">
                    <div className="mt-1 flex justify-between"><p className="text-green-600 text-[15px] font-semibold">Income</p> <FontAwesomeIcon className="text-white bg-green-400 rounded-full px-[2px] py-[2px] font-bold text-[10px]" icon={faArrowDown} /></div>
                  
                    <p className="font-bold text-[20px]">${income.toLocaleString()}</p>
                </div>
                <div className="bg-red-100 border-red-100 rounded-[14px] border p-4">
                    <div className="mt-1 flex justify-between" ><p className="text-[15px] text-red-600 font-semibold">Expenses</p> <FontAwesomeIcon className="text-white bg-red-400 rounded-full px-[2px] py-[2px] font-bold text-[10px]" icon={faArrowUp} /></div>
                    <p className="font-bold text-[20px]">${expenses.toLocaleString()}</p>
                </div>
            </div>
            <div className="flex justify-between p-4 bg-blue-100 border-blue-50 rounded-[14px] mt-3 border">
                <div className=''>
                    <h1 className='font-semibold'>Current balance</h1>
                    <p className='font-bold text-2xl text-blue-500'>${balance.toLocaleString()}</p>
                </div>
                <div>
                    <BalanceCircle income={income} expenses={expenses}/>
                </div>
            </div>
            <div className="mt-3">
                <div className="flex justify-between">
                    <h1 className='font-bold text-[17px]'>Recent Transaction</h1>
                    <p className='text-blue-500 cursor-pointer' onClick={() => navigate("/transactions")}>See All</p>
                </div>
                <div className="rounded-md mt-3 border-white">
                {transactions.length === 0 ? (
                    <p className="p-3 text-gray-500 text-center text-sm">No transactions yet. <br></br> Create your first transaction</p>
                ) : (
                    transactions.slice(0, 3).map((t) => (
                    <div key={t.id} className="bg-white rounded-[10px] p-3 mb-1 flex justify-between">
                        <div>
                        <p className="font-medium">{t.title || "Untitled"}</p>
                        <p className="text-gray-500 text-sm">{t.category}</p>
                        <p className="text-xs text-gray-500 ">{t.date} at {t.time}</p>
                        </div>
                        <p className={`font-bold text-[18px] flex items-center ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                        {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
                        </p>
                    </div>
                    ))
                )}
                </div>

            </div>
             <button onClick={() => navigate("/add-transaction")} className="fixed bottom-23 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700"><Plus size={28}/></button>
        </div>
       
        </>
    )

}
export default Dashboard;