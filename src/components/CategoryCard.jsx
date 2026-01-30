import React from 'react';

const CategoryCard = ({ title, description }) => {
    return (
        <div className="category-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="view-btn">View</button>
        </div>
    );
};

export default CategoryCard;
