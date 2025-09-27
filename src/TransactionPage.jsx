import React, {useState} from "react";
import {Plus} from "lucide-react"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTransactions } from "./Context/TransactionContext";

function TransactionPage() {

    const { transactions, deleteTransaction} = useTransactions()

    return(
        <>
        <div className="p-10"> 
            <h1 className="text-3xl font-bold mb-4">Transaction</h1>
            <div className=" flex gap-1 border-1 rounded-xl px-2">
                <div className="flex items-center"> <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
           
              <input
                type="text"
                placeholder="Search Transaction"
                className="flex-1 h-[40px] focus:outline-none "
                
              />
              </div>

              <div>
                {transactions.length === 0 ? (<p className="flex text-[20px] items-center h-[70vh] justify-center text-center text-gray-500">
                  No Transaction Yet.<br/> Add your first Transaction</p> ) : (<ul>

                </ul>)}

                    
              </div>

        <button onClick={() => navigate("/add-transaction")} className="fixed bottom-30 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700"><Plus size={28}/></button>
              

        </div>
    
        </>

        
    )

    
}
export default TransactionPage;