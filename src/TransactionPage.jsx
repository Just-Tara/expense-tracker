import React, {useState} from "react";
import {Plus} from "lucide-react"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTransactions } from "./Context/TransactionContext";

function TransactionPage() {
    const navigate = useNavigate()

    const { transactions, deleteTransaction} = useTransactions()

    return(               
        <>
        <div className="p-5 bg-[#f2f2f2] h-[100vh] dark:bg-gray-900 dark:text-white"> 
            <h1 className="text-3xl font-bold mb-4">Transaction</h1>
            <div className="mb-4 flex gap-1 border-1 rounded-xl px-2">
                <div className="flex items-center"> <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
           
              <input
                type="text"
                placeholder="Search Transaction"
                className="flex-1 h-[40px]  focus:outline-none bg "
                
              />
              </div>

              <div>
                {transactions.length === 0 ? (<p className="flex text-[20px] items-center h-[70vh] justify-center text-center text-gray-500">
                  No Transaction Yet.<br/> Add your first Transaction</p> ) : (
                  <ul>
                    
                      {transactions.map((t) => (
                        <div 
                          key={t.id}
                          className="flex mb-1 justify-between items-center border-white bg-white rounded-[10px] px-3 py-2 dark:bg-gray-950">
                           
                            <div className="flex gap-3 items-center">
                              <div><p className={`text-gray-50 p-2 rounded-full ${t.type === "income" ? "bg-green-200" : "bg-red-200"}`}>
                                 {t.icon}
                                </p>
                             </div>
                             <div>
                              <p className="font-medium">{t.title || "Untitled"}</p>
                              <p className="text-sm text-gray-500">{t.date} at {t.time}</p>
                            </div>
                             </div>
                            <div className="flex items-center gap-4">
                              <p className={`font-bold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                                {t.type === "income" ? "+" : "-"}${t.amount}</p>
                              <button onClick={() => deleteTransaction(t.id)} className="text-red-500">Delete</button>
                            </div>
                          </div>
                         
                      ))}
                </ul>)}

                    
              </div>

        <button onClick={() => navigate("/add-transaction")} className="fixed bottom-23 right-3 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-400"><Plus size={28}/></button>
              

        </div>
    
        </>

        
    )

    
}
export default TransactionPage;