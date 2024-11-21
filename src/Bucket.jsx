import React, { useState } from 'react';
// import './Global.css';
import './Bucket.css';
import { Link } from 'react-router-dom';

function Bucket() {
    const [cart, setCart] = useState([]); // State to store cart items
    const products = [
        { id: 1, name: "HERSHEY’S Dark Bar | 40g", price: "₹ 60.00", rating: "★★★★★", img: "/img/choc.jpg", details: "Deliciously Dark Cocoa Rich Chocolate" },
        { id: 2, name: "Pack of Pocket tissues", price: "₹ 10.00", rating: "★★★★★", img: "/img/w.jpg", details: "Soft and convenient pocket tissues" },
        { id: 3, name: "Gillette Venus Razor - (Pack of 1, Pink)", price: "₹ 75.00", rating: "★★★★★", img: "/img/razor.webp", details: "Razor for Women" },
        { id: 4, name: "Whisper Choice Ultra XL 6 Pads", price: "₹ 49.00", rating: "★★★★★", img: "/img/pads.webp", details: "Ultra XL sanitary pads" },
        { id: 5, name: "Sirona Tampon Regular to Medium Flow", price: "₹ 200.00", rating: "★★★★★", img: "/img/tampons.webp", details: "Regular to medium flow tampons" },
        { id: 6, name: "MIRABELLE COSMETICS KOREA Rose Facial Serum Sheet Mask", price: "₹ 110.00", rating: "★★★★★", img: "/img/rose.webp", details: "Hydrating and rejuvenating sheet mask" },
        { id: 7, name: "Nivea Soft Cream", price: "₹ 80.00", rating: "★★★★★", img: "/img/nivea.webp", details: "Moisturizing cream" },
        { id: 8, name: "ORGANIC INDIA Tulsi Green Tea Lemon Ginger Teabags", price: "₹ 8.30", rating: "★★★★★", img: "/img/tea.webp", details: "Healthy and refreshing green tea" },
        { id: 9, name: "Stayfree Secure Cotton Regular 6 Pads", price: "₹ 35.00", rating: "★★★★★", img: "/img/Stayfree.jpg", details: "Regular cotton sanitary pads" },
        { id: 10, name: "Vwash", price: "₹ 45.00", rating: "★★★★★", img: "/img/vwash.jpg", details: "Intimate hygiene wash" },
        { id: 11, name: "POND'S Light Moisturizer, 25g", price: "₹ 49.00", rating: "★★★★★", img: "/img/Lponds.webp", details: "Light and non-greasy moisturizer" },
        { id: 12, name: "Stayfree Secure Wings XL 6 Pads", price: "₹ 41.00", rating: "★★★★★", img: "/img/Xstayfree.webp", details: "XL sanitary pads with wings" },
        { id: 13, name: "Sofy BodyFit Soft XL 6 Pads", price: "₹ 39.00", rating: "★★★★★", img: "/img/sofy.webp", details: "BodyFit soft sanitary pads" },
        { id: 14, name: "Whisper Ultra Wings XL+ 7 Pads", price: "₹ 89.00", rating: "★★★★★", img: "/img/whisper.webp", details: "Ultra wings XL+ sanitary pads" },
        { id: 15, name: "Whisper Choice Regular Wings 6 Pads", price: "₹ 34.00", rating: "★★★★★", img: "/img/wf.jpg", details: "Choice regular sanitary pads with wings" }
    ];

    // Handle adding product to the cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);
            if (productExists) {
                return prevCart.map(item => 
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Handle removing product from cart
    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Handle quantity increase
    const handleIncreaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map(item => 
                item.id === productId 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            )
        );
    };

    // Handle quantity decrease
    const handleDecreaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map(item => 
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <>
            <div>
                <div className="tracker" style={{ backgroundColor: 'rgba(234, 221, 223, 0.707)' }}>
                    <h1>Create Your Own Package</h1>
                    <div className="container">
                        {products.map((product) => (
                            <div className="c" key={product.id}>
                                <Link to={`/product/${product.id}`} className="product-link">
                                    <img src={product.img} alt={product.name} />
                                    <h1>{product.name}</h1>
                                    <p className="p">{product.price}</p>
                                    <p className="star">{product.rating}</p>
                                </Link>
                                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cart Info Section */}
            <div className="cart-info">
                <h2>Cart ({cart.length} items)</h2>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <p>{item.name} - {item.price} x {item.quantity}</p>
                            <div className="cart-actions">
                                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Subscribe Section */}
            <div className="sub">
                <h1>Subscribe to our emails</h1>
                <h3>Join our email list for exclusive offers and the latest news.</h3>
            </div>

            <div className="email-input-container">
                <input type="email" placeholder="Email" className="email-input" />
                <button className="arrow-button">→</button>
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <p className="company-name">PinkParcel Services LLP</p>
                <p className="contact-number">+91 98778 29376</p>
                <p className="contact-email">getpinkparcelindia@gmail.com</p>
            </div>

            <div className="policies">
                <span>© 2024, Pink Parcel Powered by Shopify · </span>
                <a href="#refund-policy" className="policy-link">Refund policy</a> ·
                <a href="#privacy-policy" className="policy-link">Privacy policy</a> ·
                <a href="#terms-service" className="policy-link">Terms of service</a> ·
                <a href="#shipping-policy" className="policy-link">Shipping policy</a>
            </div>
        </>
    );
}

export default Bucket;
