import React from 'react';

const ReviewCard = ({ name, text, rating = 5 }) => {
    return (
        <div className="review-card">
            <div className="stars">
                {"⭐".repeat(rating)}
            </div>
            <p className="review-text">"{text}"</p>
            <p className="customer-name">- {name}</p>
        </div>
    );
};

export default ReviewCard;
