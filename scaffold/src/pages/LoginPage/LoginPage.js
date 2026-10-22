import React, { useRef, useContext, useEffect } from "react";
import styles from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <h2 className={styles.loginTitle}>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <button className={styles.loginBtn}>
          {loading ? "..." : "Sign In"}
        </button>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#224957",
            fontFamily: "Quicksand",
          }}>
          <p style={{ fontWeight: "600", margin: 0 }}>Or SignUp instead</p>
        </NavLink>
      </form>
    </div>
  );
};

export default LoginPage;
