import React from 'react';
import CategoryCard from '../components/CategoryCard';

const Categories = () => {
    const categories = [
        "Gold Jewellery", "Silver Articles", "Diamond Sets", "Platinum",
        "Gemstones", "Bridal Collections", "Antique Jewellery", "Temple Jewellery",
        "Kids Collection", "Mens Jewellery"
    ];

    return (
        <div className="page-container fade-in">
            <header className="page-header">
                <h1>All Categories</h1>
                <p>Explore our wide range of collections</p>
            </header>
            <div className="section">
                <div className="grid-container">
                    {categories.map((cat, idx) => (
                        <CategoryCard key={idx} title={cat} description="View Products" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
