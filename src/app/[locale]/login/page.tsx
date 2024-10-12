'use client';
import React from "react";
import styles from "@/assets/css/login/login.module.css";
import Link from "next/link";



const Login = () => {

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Button clicked, form submission prevented.");
    
  };



  return (
    <div>
      <div className={styles.total}>
        <div className="container">
          <div className={styles.sides}>
            <div className={styles.left_side}>
              <div className={styles.head_text}>
                <h1>
                  Start your Global <span></span>
                  <span>trade today!</span>
                </h1>
              </div>

              <div className={styles.main_text}>
                <ul>
                  <li>Comprehensive Product Range</li>
                  <li>Fast Delivery</li>
                  <li>Flexible Payment Options</li>
                  <li>24/7 Customer Support</li>
                </ul>
              </div>
            </div>

            <div className={styles.right_side}>
              <form>
                <input type="text" placeholder="Name / Surname" />
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="Email" />
                <select name="" id="">
                  <option value="1">Services</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <input type="text" placeholder="Message" />

                <div className={styles.buttons}>
                  <button type="button" onClick={handleButtonClick}>
                    Send a message
                  </button>
                  <button type="button">Back to Home</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
