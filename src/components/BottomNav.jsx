import React from 'react';

const BottomNav = ({ setPage, currentPage }) => {
    return (
        <div className="bottom-nav">
            <div className={`nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>
                <span>🏠</span>
                <label>Home</label>
            </div>
            <div className={`nav-item ${currentPage === 'categories' ? 'active' : ''}`} onClick={() => setPage('categories')}>
                <span>💎</span>
                <label>Categories</label>
            </div>
            <div className={`nav-item ${currentPage === 'gold' ? 'active' : ''}`} onClick={() => setPage('gold')}>
                <span>✨</span>
                <label>Gold</label>
            </div>
            <div className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => setPage('contact')}>
                <span>📞</span>
                <label>Contact</label>
            </div>
        </div>
    );
};

export default BottomNav;
