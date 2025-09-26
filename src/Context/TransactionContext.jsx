import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();


export function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([]);
    const addTransaction = (transaction) =>{
        setTransactions((prev) => [...prev, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
    };
    return(
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}
export const useTransactions = () => useContext(TransactionContext);