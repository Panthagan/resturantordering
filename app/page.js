'use client'
import React, { useState } from 'react';
import './style.css'; // Import external CSS file

const CussineConnect = () => {
    // State for menu items and cart items
    const [menuItems, setMenuItems] = useState([
        { name: 'Pizza', price: 10.99 },
        { name: 'Burger', price: 8.99 },
        { name: 'Pasta', price: 12.99 },
        { name: 'Salad', price: 6.99 }
    ]);
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addToCart = (name, price) => {
        const newItem = { name, price };
        setCartItems([...cartItems, newItem]);
    };

    // Function to place order
    const placeOrder = () => {
        if (cartItems.length > 0) {
            alert('Order placed successfully!');
            setCartItems([]); // Clear cart after placing order
        } else {
            alert('Your cart is empty. Please add items before placing an order.');
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <a href="#">CussineConnect</a>
                    <a href="#">Download App</a>
                    <a href="#">For Restaurants</a>
                    <a href="#">Log In</a>
                </nav>
            </header>

            <main>
                <section className="benefits">
                    <div className="benefit">
                        <h2>Order Better Network</h2>
                    </div>
                    <div className="benefit">
                        <p>Your online ordering restaurant.</p>
                    </div>
                </section>

                <section className="menu-display">
                    <h2>Menu</h2>
                    {menuItems.map(item => (
                        <div key={item.name} className="menu-item">
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(item.name, item.price)}>Add to Cart</button>
                        </div>
                    ))}
                </section>

                <section className="cart">
                    <h2>Cart</h2>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <p>{item.name} - ${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                    <button className="place-order-button" onClick={placeOrder}>Place Order</button>
                </section>
            </main>

            <footer>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default CussineConnect;
