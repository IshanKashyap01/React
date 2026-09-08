import styles from "./ExpenseInfo.module.css"

export default function ExpenseInfo({expenses})
{
    let income = 0
    let expense = 0
    const total = expenses.reduce((total, curr) => {
        const amount = parseInt(curr.amount)
        if (amount < 0)
        {
            expense += amount
        }
        else
        {
            income += amount
        }
        return amount + total
    }, 0)
    return (
        <div className={styles.expenseInfoContainer}>
            <div className={styles.balance}>
                <h4>YOUR BALANCE</h4>
                <h1>${total.toFixed(2)}</h1>
            </div>
            <div className={styles.incomeExpenseContainer}>
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
                        +${income}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
                        -${expense}
                    </p>
                </div>
            </div>
        </div>
    )
}
