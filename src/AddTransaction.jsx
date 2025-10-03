import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "./Context/TransactionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMoneyBillWave, 
  faGift, 
  faChartLine, 
  faBriefcase, 
  faEllipsisH, 
  faHome, 
  faBurger, 
  faCartShopping, 
  faBus, 
  faBox 
} from "@fortawesome/free-solid-svg-icons";


function AddTransaction() {
  const { addTransaction } = useTransactions();
  const navigate = useNavigate();

  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

 const categories = {
  income: [
    { label: "Salary", icon: <FontAwesomeIcon icon={faMoneyBillWave} /> },
    { label: "Gift", icon: <FontAwesomeIcon icon={faGift} /> },
    { label: "Investment", icon: <FontAwesomeIcon icon={faChartLine} /> },
    { label: "Side Hustle", icon: <FontAwesomeIcon icon={faBriefcase} /> },
    { label: "Others", icon: <FontAwesomeIcon icon={faEllipsisH} /> },
  ],
  expense: [
    { label: "Rent", icon: <FontAwesomeIcon icon={faHome} /> },
    { label: "Food", icon: <FontAwesomeIcon icon={faBurger} /> },
    { label: "Shopping", icon: <FontAwesomeIcon icon={faCartShopping} /> },
    { label: "Transportation", icon: <FontAwesomeIcon icon={faBus} /> },
    { label: "Others", icon: <FontAwesomeIcon icon={faBox} /> },
  ],
};


  const formatDate = (date) => {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };
    const parts = date.toLocaleDateString("en-GB", options).split(" ");
    return `${parts[1]} ${parts[2]} ${parts[3]}`;
  };

  const now = new Date();
  const currentDate = formatDate(now);
  const currentTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;

  const selectedCategory = categories[type].find(cat => cat.label === category);

      const newTransaction = {
        id: Date.now(),
        type,
        title,
        category: selectedCategory.label,   
        icon: selectedCategory.icon,        
        amount: parseFloat(amount),
        date: currentDate,
        time: currentTime,
        note,
      };

    addTransaction(newTransaction);
    navigate("/transactions");
  };

  return (
    <div className="px-10 py-3 bg-[#eee] h-[100vh] dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between mt-3 mb-4">
        <button onClick={() => navigate("/transactions")} className="text-blue-400 cursor-pointer">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className={`cursor-pointer ${!amount || !category ? "text-gray-500" : "text-blue-500"}`}
        >
          Save
        </button>
      </div>

      <h2 className="text-[27px] font-bold mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-3 bg-white dark:bg-gray-950">
          <div className="p-[4px] rounded-md flex text-sm w-full bg-[#eee] dark:bg-gray-900">
            <button
              type="button"
              className={`cursor-pointer w-1/2 p-[6px] ${type === "income" ? "bg-white dark:bg-gray-950"  : ""}`}
              onClick={() => setType("income")}
            >
              Income
            </button>
            <button
              type="button"
              className={`cursor-pointer w-1/2 p-[6px] ${type === "expense" ? "bg-white dark:bg-gray-950" : ""}`}
              onClick={() => setType("expense")}
            >
              Expense
            </button>
          </div>
        </div>

    
        <p className="uppercase pl-3 text-xs text-gray-600">details</p>
        <div className="  bg-white rounded-md dark:bg-gray-950">
          <div className="px-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-b py-2 border-gray-200 w-full focus:outline-none"
          />
          </div>
          <div className="flex px-3 items-center">
            <span className="font-semibold text-[18px]">$</span>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="px-2 py-2 border-b border-gray-200 w-full focus:outline-none"
            />
          </div>
          <div className="flex justify-between px-3 p-1 font-semibold">
            <p className="flex items-center">Date</p>
            <div className="flex gap-2">
              <button type="button" className="bg-[#eee] p-1 rounded-md dark:bg-gray-900">{currentDate}</button>
              <button type="button" className="bg-[#eee] p-1 rounded-md dark:bg-gray-900">{currentTime}</button>
            </div>
          </div>
        </div>

        <p className="uppercase pl-3 text-xs text-gray-600">category</p>
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full max-w-full border border-gray-200 bg-white p-2 rounded-md overflow-hidden truncate dark:bg-gray-950"
          >
            <option value="" >-- Select Category --</option>
            {categories[type].map((cat) => (
              <option key={cat.label} value={cat.label}>
                {cat.icon} {cat.label}
              </option>
            ))}
          </select>



        <p className="uppercase pl-3 text-xs text-gray-600">description</p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="px-3 py-1 bg-white w-full rounded-md h-[100px] focus:outline-none dark:bg-gray-950"
        />
      </form>
    </div>
  );
}

export default AddTransaction;
