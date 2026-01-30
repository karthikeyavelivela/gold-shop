import React from 'react';
import ProductCard from '../components/ProductCard';

const Silver = () => {
    const products = [
        { name: "Silver Plate", price: 12000 },
        { name: "Silver Lamp (Diya)", price: 5000 },
        { name: "Silver Anklets", price: 3000 },
        { name: "Silver Coin 10g", price: 900 },
        { name: "Silver Bowl", price: 4500 },
        { name: "Silver Idol", price: 8000 },
    ];

    return (
        <div className="page-container fade-in">
            <header className="page-header silver-header">
                <h1>Silver Collection</h1>
                <p>Exquisite Silver Articles & Jewellery</p>
            </header>
            <div className="section">
                <div className="grid-container">
                    {products.map((prod, idx) => (
                        <ProductCard key={idx} name={prod.name} price={prod.price} imageColor="#C0C0C0" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Silver;
