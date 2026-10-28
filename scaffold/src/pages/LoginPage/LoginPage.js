import { useRef } from "react"
import styles from "./LoginPage.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import {useAuth} from "../../context/Auth/AuthContext"

export default function LoginPage()
{
    const {loading, login} = useAuth()
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()
    async function onSubmitHandler(event)
    {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        await login(email, password)
        .then(() => navigate("/"))
        
    }
    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={e => onSubmitHandler(e)} >
                <h2 className={styles.loginTitle}>Sign In</h2>
                <input 
                    type="email" name="email" placeholder="Enter Email"
                    ref={emailRef}
                />
                <input 
                    type="password" name="password" placeholder="Enter Password"
                    ref={passRef}
                />
                <button className={styles.loginBtn}>
                {loading ? "..." : "Sign In"}
                </button>
                <NavLink
                    style={{textDecoration: "none", color: "#224957", fontFamily: "Quicksand",}}
                    to="/signup"
                >
                <p style={{ fontWeight: "600", margin: 0 }}>Or SignUp instead</p>
                </NavLink>
            </form>
        </div>
    )
}