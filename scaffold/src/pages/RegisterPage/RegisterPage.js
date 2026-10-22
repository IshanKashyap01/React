import React, { useRef, useEffect, useContext } from "react";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
// Create your state or ref here to store the value of the input fields

// write the submit handler function to validate the forma and signup the user 
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h2 className={styles.loginTitle}>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className={styles.loginInput}
        />
        <input
          type="email"
          name="email"
          className={styles.loginInput}
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          className={styles.loginInput}
          placeholder="Enter Password"
        />
        <button className={styles.loginBtn}>
          {loading ? "..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
