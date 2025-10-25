import axios from "axios";


const BASE_URL = "http://127.0.0.1:8000/";


const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};


export const signupUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/api/auth/signup`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {

  const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
  return response.data;
};


export const updateOnboarding = async (hasSeenOnboarding) => {
  const response = await axios.put(
    `${BASE_URL}/api/onboarding/`,
    { has_seen_onboarding: hasSeenOnboarding },
    { headers: getAuthHeaders() }
  );
  return response.data;
};

export const createExpense = async (userId, expenseData) => {
  const response = await axios.post(
    `${BASE_URL}/api/expenses/${userId}`,
    expenseData,
    { headers: getAuthHeaders() }
  );
  return response.data;
};

export const getAllExpenses = async (userId) => {
  const response = await axios.get(
    `${BASE_URL}/api/expenses/${userId}`,
    { headers: getAuthHeaders() }
  );
  return response.data;
};

export const deleteExpense = async (userId, expenseId) => {
  const response = await axios.delete(
    `${BASE_URL}/api/expenses/${userId}/${expenseId}`,
    { headers: getAuthHeaders() }
  );
  return response.data;
};


export const createIncome = async (userId, incomeData) => {
  const response = await axios.post(
    `${BASE_URL}/api/income/${userId}`,
    incomeData,
    { headers: getAuthHeaders() }
  );
  return response.data;
};

export const getAllIncome = async (userId) => {
  const response = await axios.get(
    `${BASE_URL}/api/income/${userId}`,
    { headers: getAuthHeaders() }
  );
  return response.data;
};

export const deleteIncome = async (userId, incomeId) => {
  const response = await axios.delete(
    `${BASE_URL}/api/income/${userId}/${incomeId}`,
    { headers: getAuthHeaders() }
  );
  return response.data;
};


export const getSummary = async () => {
  const response = await axios.get(`${BASE_URL}/api/summary/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};


export const getLatestTransactions = async () => {
  const response = await axios.get(
    `${BASE_URL}/api/latest/latest-transactions/`,
    { headers: getAuthHeaders() }
  );
  return response.data;
};


export const updateCurrency = async (currency) => {
  const response = await axios.put(
    `${BASE_URL}/api/currency/users/currency`,
    { currency },
    { headers: getAuthHeaders() }
  );
  return response.data;
};


export const exportData = async () => {
  const response = await axios.get(`${BASE_URL}/api/export/`, {
    headers: getAuthHeaders(),
    responseType: "blob", 
  });
  return response.data;
};

export const deleteUserData = async () => {
  const response = await axios.delete(`${BASE_URL}/api/data/users/data`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};


export const testServer = async () => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};
