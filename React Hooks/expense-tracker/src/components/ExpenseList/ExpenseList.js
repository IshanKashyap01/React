import styles from "./ExpenseList.module.css"
import Transaction from '../Transaction/Transaction'

export default function ExpenseList({expenses, deleteExpense, getExpenseToUpdate})
{
    return (
        <div className={styles.expenseListContainer}>
            <h3>Transactions</h3>
            <ul className={styles.transactionList}>
            {/* Display transactions here */}
            {expenses.map((t, i) => (
                <Transaction 
                    key = {t.id} index = {i} expense = {t} 
                    deleteExpense = {deleteExpense}
                    getExpenseToUpdate = {getExpenseToUpdate}
                />
            ))}
            </ul>
        </div>
    )
}
