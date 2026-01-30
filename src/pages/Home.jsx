import React from 'react';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import InfiniteScrollCircles from '../components/InfiniteScrollCircles';

const Home = () => {
    const categories = [
        "Gold Jewellery", "Silver Jewellery", "Coins", "Plates", "Chains",
        "Bangles", "Rings", "Earrings", "Bracelets", "Bridal Sets"
    ];

    const products = [
        { name: "Gold Chain", price: 50000 },
        { name: "Gold Ring", price: 25000 },
        { name: "Gold Plate", price: 150000 },
        { name: "Gold Coin", price: 10000 },
        { name: "Gold Necklace", price: 80000 },
    ];

    const emails = ["customer1@gmail.com", "customer2@gmail.com", "customer3@gmail.com"];

    const reviews = [
        { name: "Ravi Kumar", text: "Excellent quality gold and very trustworthy shop." },
        { name: "Sneha Reddy", text: "Beautiful bridal sets, loved the designs!" },
        { name: "Amit Sharma", text: "Best place to buy coins. Service is great." },
    ];

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section className="hero-section">
                <h1>Pure Gold. Pure Trust.</h1>
                <p className="sub-text">Traditional & modern jewellery collections</p>
                <button className="shop-now-btn">Shop Now</button>
            </section>

            {/* INFINITE SCROLL SECTION */}
            <InfiniteScrollCircles />

            {/* EMAIL DISPLAY SECTION */}
            <section className="section email-section">
                <h2>Our Happy Customers</h2>
                <div className="email-cards">
                    {emails.map((email, idx) => (
                        <div key={idx} className="email-card">{email}</div>
                    ))}
                </div>
            </section>

            {/* CATEGORY SECTION */}
            <section className="section category-section">
                <h2>Shop By Category</h2>
                <div className="grid-container">
                    {categories.map((cat, idx) => (
                        <CategoryCard key={idx} title={cat} description="Explore collection" />
                    ))}
                </div>
            </section>

            {/* GOLD ITEMS SECTION */}
            <section className="section products-section">
                <h2>Featured Gold Items</h2>
                <div className="grid-container">
                    {products.map((prod, idx) => (
                        <ProductCard key={idx} name={prod.name} price={prod.price} />
                    ))}
                </div>
            </section>

            {/* SIDEBAR SCROLLING CART SECTION */}
            <section className="section scrolling-section">
                <h2>Gallery</h2>
                <div className="scroll-container">
                    {/* Items repeated for smooth scroll effect if needed, dummy divs for now */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="scroll-item image-placeholder">
                            <span>Gold Item {i + 1}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="section video-section">
                <h2>Video Showcase</h2>
                <div className="scroll-container">
                    {["Necklace Showcase", "Chain Making", "Bridal Set"].map((title, i) => (
                        <div key={i} className="video-card">
                            <video autoPlay loop muted playsInline className="video-element">
                                <source src="" type="video/mp4" />
                                {/* Fallback visual */}
                                Your browser does not support video.
                            </video>
                            <div className="video-overlay">{title}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <section className="section reviews-section">
                <h2>Customer Reviews</h2>
                <div className="grid-container">
                    {reviews.map((rev, idx) => (
                        <ReviewCard key={idx} name={rev.name} text={rev.text} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
