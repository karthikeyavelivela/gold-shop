import React from 'react';
import ProductCard from '../components/ProductCard';

const Gold = () => {
    const products = [
        { name: "Gold Chain 22k", price: 45000 },
        { name: "Traditional Haram", price: 150000 },
        { name: "Gold Bangles (Set)", price: 80000 },
        { name: "Gold Ring (Mens)", price: 35000 },
        { name: "Gold Earrings", price: 20000 },
        { name: "Gold Coin 10g", price: 65000 },
    ];

    return (
        <div className="page-container fade-in">
            <header className="page-header gold-header">
                <h1>Gold Collection</h1>
                <p>Purest 22k & 24k Gold Jewellery</p>
            </header>
            <div className="section">
                <div className="grid-container">
                    {products.map((prod, idx) => (
                        <ProductCard key={idx} name={prod.name} price={prod.price} imageColor="#ffd700" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gold;
