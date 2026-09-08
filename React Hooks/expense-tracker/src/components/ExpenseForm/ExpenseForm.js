import { useEffect, useRef } from "react"
import styles from "./ExpenseForm.module.css"

export default function ExpenseForm({addExpense, expense, setExpense, updateExpense})
{
    const textRef = useRef()
    const amountRef = useRef()
    useEffect(() => {
        if(expense)
        {
            textRef.current.value = expense.text
            amountRef.current.value = expense.amount
        }
    }, [expense])
    const clearInputs = () => {
        textRef.current.value = ""
        amountRef.current.value = ""
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const text = textRef.current.value
        const amount = parseInt(amountRef.current.value)
        if(amount === 0)
        {
            return
        }
        if(expense)
        {
            updateExpense({
                id: expense.id,
                text: text,
                amount: amount
            })
            setExpense(null)
        }
        else
        {
            addExpense({
                id: new Date().getTime(),
                text: text,
                amount: amount
            })
        }
        clearInputs()
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3>{expense ? "Edit Transaction" : "Add new transaction"}</h3>
            <label htmlFor="expenseText">Text</label>
            <input
            id="expenseText" name="text" className={styles.input} type="text" 
            placeholder="Enter text..." required ref={textRef}
            />
            <div>
                <label htmlFor="expenseAmount">Amount</label>
                <div>(negative - expense,positive-income)</div>
            </div>
            <input
            className={styles.input} id="expenseAmount" name="amount" type="number"
            placeholder="Enter amount..." required ref={amountRef}
            />
            <button className={styles.submitBtn}>
                {expense ? "Edit Transaction" : "Add Transaction"}
            </button>
        </form>
    )
}
