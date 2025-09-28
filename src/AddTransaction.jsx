import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "./Context/TransactionContext";


function AddTransaction() {
    const { addTransaction } = useTransactions();
    const navigate = useNavigate();

    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("others");
    const [amount, setAmount] = useState("");
     const [title, setTitle] = useState("");
     const [note, setNote] = useState("");

    
    const formatDate = (date) => {
        const options = {
            day: "2-digit",
            weekday: "short",
            year: "2-digit",
            month: "short"
        };

        const parts = date.toLocaleDateString("en-GB", options).split(" ");
        return `${parts[1]} ${parts[0].replace(",", "")} ${parts[3]}`
        };
       
    const handleSubmit = (e) => {
        e.preventDefault();

        
        const newTransaction = {
            id: Date.now(),
            type,
            title,
            category,
            amount:parseFloat(amount),
            date: formatDate(new Date()),
            time: new Date().toLocaleTimeString(),
            note,
        };

         addTransaction(newTransaction);
        navigate("/transactions");
    };
    
    
    return(
        <>
            <div className="px-10 py-3 bg-[#eee] h-[100vh]">
                <div className="flex justify-between mt-3 cursor-pointer mb-4">
                    <button onClick={() => navigate("/transactions")} className="text-blue-400 cursor-pointer">Cancel</button>
                    <button onClick={handleSubmit} className="text-gray-500 cursor-pointer font-semibold">Save</button>
                </div>
                <h2 className="text-[27px] font-bold mb-4">Add Transaction</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="p-3 flex border-white bg-white">
                        <div className=" p-[4px] border-[#eee] rounded-md flex text-sm w-full bg-[#eee]">
                    <button
                        type="button"   
                        className={`cursor-pointer ${ type === "income" ? "bg-white w-[50%] p-[6px]" : "bg-grey-200  w-[50%]"}`}
                        onClick={() => setType("income")}
                        >
                        Income
                        </button>

                        <button
                        type="button"
                        className={`cursor-pointer ${ type === "expense" ? "bg-white w-[50%] p-[6px]" : "bg-grey-200  w-[50%]"}`}
                        onClick={() => setType("expense")}
                        >
                        Expense
                        </button>

                        </div>
                    </div>
                    <p className="uppercase pl-3 text-xs text-gray-600">details</p>
                    <div className="bg-white rounded-md">
                        <input 
                            type="text"
                            placeholder="Title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="px-3 py-2 focus:outline-none border-b border-gray-200 w-full "/>
                       
                        <div className="flex px-3 ">
                            <button className="font-semibold">$</button>
                            <input 
                                type="number" 
                                placeholder="Amount" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="px-2 py-2 focus:outline-none border-b border-gray-200 w-full  " />
                        </div>
                        <div className="flex justify-between px-3 p-1 font-semibold">
                            <p className="flex items-center">Date</p>
                            <div className="flex gap-2 ">
                                <button className="bg-[#eee] p-1 rounded-md">28 Sun 25</button>
                                <button className="bg-[#eee] p-1 rounded-md">5:57 PM</button>
                            </div>
                        </div>
                    </div>
                     <p className="uppercase pl-3 text-xs text-gray-600">category</p>

                     <input 
                        type="text" 
                        placeholder="Category(e.g. Food, Rent)"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border-white bg-white p-2 w-full focus:outline-none"
                        />


                     <p className="uppercase pl-3 text-xs text-gray-600">notes</p>
                     <textarea className="focus:outline-none px-3 py-1 border-white bg-white w-full rounded-md h-[100px]"></textarea>


                </form>
            </div>
        </>
    );
}

export default AddTransaction;