import React from 'react';

const Navbar = ({ setPage, onOpenDrawer }) => {
    return (
        <nav className="navbar">
            <div className="logo" onClick={() => setPage("home")} style={{ cursor: 'pointer' }}>
                <h2>Sri Lakshmi Jewellers</h2>
            </div>

            {/* Desktop Nav */}
            <div className="nav-links desktop-only">
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("categories")}>Categories</button>
                <button onClick={() => setPage("gold")}>Gold</button>
                <button onClick={() => setPage("silver")}>Silver</button>
                <button onClick={() => setPage("contact")}>Contact</button>
                <button className="btn login-btn" onClick={() => setPage("login")}>Login</button>
                <button className="btn signup-btn" onClick={() => setPage("signup")}>Signup</button>
            </div>

            {/* Mobile Nav Trigger */}
            <div className="mobile-menu-icon" onClick={onOpenDrawer}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
