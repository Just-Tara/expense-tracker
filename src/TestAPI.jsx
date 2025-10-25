import React, { useState } from "react";
import {
  testServer,
  signupUser,
  getAllExpenses,
  createExpense,
  deleteUserData,
  getSummary,
} from "./api";

export default function TestAPI() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

 
  const handleRequest = async (callback, label) => {
    try {
      setLoading(true);
      setOutput(` Testing ${label}...`);
      const res = await callback();
      console.log(res);
      setOutput(`${label} success:\n${JSON.stringify(res, null, 2)}`);
    } catch (err) {
      console.error(err);
      setOutput(` ${label} failed:\n${err.response?.data ? JSON.stringify(err.response.data, null, 2) : err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-center"> API Test Dashboard</h1>

      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <button
          onClick={() => handleRequest(testServer, "Server Connection")}
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded-lg"
        >
          Test Server
        </button>

        <button
          onClick={() =>
            handleRequest(() =>
              signupUser({
                name: "John Doe",
                email: "john@example.com",
                username: "john123",
                password: "123456",
              }),
              "Signup"
            )
          }
          disabled={loading}
          className="bg-green-600 text-white p-2 rounded-lg"
        >
          Test Signup
        </button>

        <button
          onClick={() =>
            handleRequest(() => getAllExpenses(1), "Get All Expenses (User 1)")
          }
          disabled={loading}
          className="bg-indigo-600 text-white p-2 rounded-lg"
        >
          Get All Expenses
        </button>

        <button
          onClick={() =>
            handleRequest(() =>
              createExpense(1, { amount: 200, category: "Food", description: "Lunch" }),
              "Create Expense (User 1)"
            )
          }
          disabled={loading}
          className="bg-yellow-600 text-white p-2 rounded-lg"
        >
          Create Expense
        </button>

        <button
          onClick={() => handleRequest(getSummary, "Get Summary")}
          disabled={loading}
          className="bg-purple-600 text-white p-2 rounded-lg"
        >
          Get Summary
        </button>

        <button
          onClick={() => handleRequest(() => deleteUserData(1), "Delete All User Data (User 1)")}
          disabled={loading}
          className="bg-red-600 text-white p-2 rounded-lg"
        >
          Delete All Data
        </button>
      </div>

      <pre className="mt-8 bg-black text-white p-4 rounded-lg overflow-auto text-sm">
        {output || "Results will appear here..."}
      </pre>
    </div>
  );
}
