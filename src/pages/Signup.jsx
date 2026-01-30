import React from 'react';

const Signup = ({ setPage }) => {
    return (
        <div className="auth-page slide-in">
            <h2>Signup</h2>
            <div className="auth-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="primary-btn">Signup</button>
            </div>
            <p>
                Already have an account?{" "}
                <span onClick={() => setPage("login")} className="link">
                    Login
                </span>
            </p>
        </div>
    );
};

export default Signup;
