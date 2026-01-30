import React from 'react';

const ProductCard = ({ name, price, imageColor = "#f0c14b" }) => {
    return (
        <div className="product-card">
            <div className="product-image" style={{ backgroundColor: imageColor }}>
                {/* Placeholder for Product Image */}
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p className="price">₹{price.toLocaleString()}</p>
                <button className="add-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
