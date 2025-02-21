import React, { useState } from 'react'
import Balance from './Balance';
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import './Expense.css'


export default function ExpenseMain() {
    const [transactions,setTransactions] =useState([])
 
  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <>
    <div  className='exbody'>

    <div style={{ textAlign: "center", padding: "20px" }} className='exmain'>
      <h2>Expense Tracker</h2>
      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
    </div>
    </>
  );
}
