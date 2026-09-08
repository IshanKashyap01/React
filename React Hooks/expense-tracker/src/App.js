import { useReducer, useState } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseInfo from './components/ExpenseInfo/ExpenseInfo'
import ExpenseList from './components/ExpenseList/ExpenseList'

export default function App()
{
    const [state, dispatch] = useReducer(reducer, {expenses: []})
    const [expense, setExpense] = useState()
    const addExpense = (expense) => {
        dispatch({type: "add", payload: {expense}})
    }
    const deleteExpense = (id) => {
        dispatch({type: "remove", payload: {id}})
    }
    const updateExpense = (expense) => {
        dispatch({type: "update", payload: {expense}})
    }
    return <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
        <ExpenseForm 
            addExpense = {addExpense} expense = {expense} setExpense = {setExpense}
            updateExpense = {updateExpense}
        />
        <div className="expenseContainer">
            <ExpenseInfo expenses = {state.expenses} />
            <ExpenseList
                expenses = {state.expenses} deleteExpense = {deleteExpense}
                getExpenseToUpdate = {setExpense}
            />
        </div>
        </div>
    </>
}

function reducer(state, action)
{
    const {expenses} = state
    const {payload} = action
    switch(action.type)
    {
        case "add": return {expenses: [payload.expense, ...expenses]}
        case "remove": return {expenses: expenses.filter(e => e.id !== payload.id)}
        case "update": return {expenses: expenses.map(e => e.id === payload.expense.id ? payload.expense : e)}
        default: return state
    }
}