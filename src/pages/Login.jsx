import React from 'react';

const Login = ({ setPage }) => {
    return (
        <div className="auth-page slide-in">
            <h2>Login</h2>
            <div className="auth-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="primary-btn">Login</button>
            </div>
            <p>
                Don't have an account?{" "}
                <span onClick={() => setPage("signup")} className="link">
                    Create account
                </span>
            </p>
        </div>
    );
};

export default Login;
