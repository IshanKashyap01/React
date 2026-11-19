import { useRef } from "react"
import styles from "./RegisterPage.module.css"
import { useAuth } from "../../context/Auth/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function RegisterPage()
{
    // Create your state or ref here to store the value of the input fields
    const name = useRef()
    const email = useRef()
    const pass = useRef()
    const {loading, register} = useAuth()
    const navigate = useNavigate()
    async function onSubmitHandler(event)
    {
        event.preventDefault()
        await register(name.current.value, email.current.value, pass.current.value)
        .then(() => navigate("/"))
    }
    // write the submit handler function to validate the forma and signup the user 
    return (
        <div className={styles.formContainer}>
            <form 
                className={styles.form} onSubmit={onSubmitHandler}
                onInvalid={() => toast("Please enter valid data!")}
            >
                <h2 className={styles.loginTitle}>Sign Up</h2>
                <input
                    type="text" name="name" placeholder="Enter Name"
                    className={styles.loginInput} ref={name} required
                />
                <input
                    type="email" name="email" className={styles.loginInput}
                    placeholder="Enter Email" ref={email} required
                />
                <input
                    type="password" name="password" className={styles.loginInput} 
                    placeholder="Enter Password" ref={pass} minLength={6} required
                />
                <button className={styles.loginBtn}>
                    {loading ? "..." : "Sign Up"}
                </button>
            </form>
        </div>
    )
}