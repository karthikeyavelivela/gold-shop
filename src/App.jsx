import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Gold from "./pages/Gold";
import Silver from "./pages/Silver";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SideDrawer from "./components/SideDrawer";
import BottomNav from "./components/BottomNav";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState("home"); // home, login, signup, gold, silver, categories, contact
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        // 0.8 seconds loading animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    return (
        <>
            {isLoading && (
                <div className={`intro-screen ${!isLoading ? "slide-up" : ""}`}>
                    <h1>Sri Lakshmi Jewellers</h1>
                    <p>By Owner</p>
                </div>
            )}

            {!isLoading && (
                <div className="app-container slide-in">
                    <Navbar setPage={handlePageChange} onOpenDrawer={() => setDrawerOpen(true)} />

                    <SideDrawer
                        isOpen={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        setPage={handlePageChange}
                    />

                    <main className="main-content">
                        {page === "home" && <Home />}
                        {page === "login" && <Login setPage={handlePageChange} />}
                        {page === "signup" && <Signup setPage={handlePageChange} />}
                        {page === "gold" && <Gold />}
                        {page === "silver" && <Silver />}
                        {page === "categories" && <Categories />}
                        {page === "contact" && <Contact />}
                    </main>

                    <Footer />
                    <BottomNav setPage={handlePageChange} currentPage={page} />
                </div>
            )}
        </>
    );
}

export default App;
