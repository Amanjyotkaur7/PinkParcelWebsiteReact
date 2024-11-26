import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentGateway.css";

const PaymentGateway = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful! Thank you for your purchase.");
  };

  return (
    <div className="payment-gateway-container">
      <h2>Payment Gateway</h2>

      {product && (
        <div className="product-summary">
          <h3>Product Summary</h3>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
        </div>
      )}

      <form className="payment-form" onSubmit={handleSubmit}>
        <h3>Billing Information</h3>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={billingInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={billingInfo.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={billingInfo.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={billingInfo.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          ZIP Code:
          <input
            type="text"
            name="zip"
            value={billingInfo.zip}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={billingInfo.country}
            onChange={handleInputChange}
            required
          />
        </label>

        <h3>Payment Method</h3>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="credit"
            checked={paymentMethod === "credit"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit/Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>

        <button type="submit" className="payment-button">
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentGateway;
