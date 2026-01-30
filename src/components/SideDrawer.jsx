import React from 'react';

const SideDrawer = ({ isOpen, onClose, setPage }) => {
    const handleNav = (page) => {
        setPage(page);
        onClose();
    };

    return (
        <>
            {isOpen && <div className="backdrop" onClick={onClose}></div>}
            <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
                <div className="drawer-header">
                    <h3>Menu</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <ul className="drawer-links">
                    <li onClick={() => handleNav('home')}>Home</li>
                    <li onClick={() => handleNav('categories')}>Categories</li>
                    <li onClick={() => handleNav('gold')}>Gold</li>
                    <li onClick={() => handleNav('silver')}>Silver</li>
                    <li onClick={() => handleNav('contact')}>Contact</li>
                    <li className="divider"></li>
                    <li onClick={() => handleNav('login')}>Login</li>
                    <li onClick={() => handleNav('signup')}>Signup</li>
                </ul>
            </div>
        </>
    );
};

export default SideDrawer;
