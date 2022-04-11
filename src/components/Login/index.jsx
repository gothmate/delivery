import React from "react";
import './index.css';
import Button from "../Button";


export default function Login() {

    const loggedin = () => {
        console.log("logged in");
    }

    return (
        <div className="login-body">
            <header>
                <h2>Food</h2>
                <h3>delivery</h3>
            </header>
            <aside>
                <h1>Login</h1>
                <p>Sign in with your data that you entered during your registration.</p>
                <form className="login-area">
                    <div className="email-area">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="current-email" type="text" placeholder="name@exemple.com" />
                    </div>
                    <div className="password-area">
                        <label htmlFor="password" >Password</label>
                        <input autoComplete="current-password" type="password" placeholder="minimum 8 characters" />
                        <label className="check">
                            <input type="checkbox" />
                            Keep me logged in
                        </label>
                    </div>
                    <Button onClick={()=> loggedin} type="submit">Login</Button>
                </form>
            </aside>
        </div>
    )
}