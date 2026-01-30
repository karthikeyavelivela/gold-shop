import React from 'react';

const InfiniteScrollCircles = () => {
    // Professional text instead of emojis
    const items = [
        "100% HALLMARKED GOLD",
        "•",
        "LIFETIME EXCHANGE",
        "•",
        "BEST PRICE GUARANTEE",
        "•",
        "PURE TRUST",
        "•",
        "CERTIFIED DIAMONDS",
        "•",
        "FREE SHIPPING",
        "•"
    ];

    return (
        <div className="infinite-scroll-container">
            <div className="scroll-track">
                {items.map((item, index) => (
                    <span className="scroll-text" key={index}>
                        {item}
                    </span>
                ))}
                {/* Duplicate for seamless effect */}
                {items.map((item, index) => (
                    <span className="scroll-text" key={`dup-${index}`}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollCircles;
