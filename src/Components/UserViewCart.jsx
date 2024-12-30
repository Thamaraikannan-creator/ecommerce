import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../Styles/UserViewCart.css';

export default function UserViewCart() {
    let [products, setProducts] = useState([]);
    let [force, setForce] = useState(0);
    let [selectedPayment, setSelectedPayment] = useState('Online'); // Payment method state

    useEffect(() => {
        function fetchData() {
            axios
                .get('http://localhost:1000/Cart')
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, [force]);

    function deleteProduct(id) {
        axios.delete(`http://localhost:1000/Cart/${id}`)
            .then(() => {
                setForce(force + 1);
                alert('Item deleted');
            })
            .catch((err) => {
                console.log(err);
                alert('Failed to delete item');
            });
    }

    // Calculate total price and total items
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    const totalItems = products.length;

    // Place order
    const placeOrder = () => {
        const orderDetails = {
            items: products,
            totalPrice,
            paymentMethod: selectedPayment,
        };

        // Mock API request
        axios.post('http://localhost:1000/Order', orderDetails)
            .then(() => {
                alert('Order placed successfully');
                setProducts([]); // Clear cart
                setForce(force + 1);
            })
            .catch((err) => {
                console.log(err);
                alert('Order placement failed');
            });
    };

    return (
        <div className="UserViewCart">
            <h1>Shopping Cart</h1>

            {/* Show empty cart message */}
            {products.length === 0 && (
                <p className="empty-cart">Your cart is empty. Start shopping now!</p>
            )}

            {/* List of products */}
            <div className="cart-items">
                {products.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="item-details">
                            <h2>{product.name}</h2>
                            <p>Price: ${Number(product.price).toFixed(2)}</p>

                            <button
                                className="delete-button"
                                onClick={() => deleteProduct(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            {products.length > 0 && (
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: ${Number(totalPrice).toFixed(2)}</p>

                    {/* Payment Method */}
                    <div className="payment-method">
                        <h3>Choose Payment Method:</h3>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="Online"
                                checked={selectedPayment === 'Online'}
                                onChange={(e) => setSelectedPayment(e.target.value)}
                            />
                            Online Payment
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="Cash on Delivery"
                                checked={selectedPayment === 'Cash on Delivery'}
                                onChange={(e) => setSelectedPayment(e.target.value)}
                            />
                            Cash on Delivery
                        </label>
                    </div>

                    {/* Checkout Button */}
                    <button
                        className="checkout-button"
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
}
