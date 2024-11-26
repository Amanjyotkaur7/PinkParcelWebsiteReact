// import React, { useState } from "react";
// import "./Products.css"; // Ensure the CSS file is in the same folder

// const ProductDetails = () => {
//   const [reviews, setReviews] = useState([
//     { id: 1, name: "John", comment: "Great product! Highly recommend." },
//     { id: 2, name: "Amy", comment: "I didn't like the quality as much." },
//   ]);

//   const sampleProduct = {
//     id: 1,
//     name: "HERSHEY’S Dark Bar | 40g",
//     description: "Deliciously Dark Cocoa Rich Chocolate",
//     price: "₹ 60.00",
//     rating: "★★★★★",
//     image: "/img/choc.jpg",
//   };

//   const [newReview, setNewReview] = useState("");
//   const [newReviewer, setNewReviewer] = useState("");

//   const handleAddReview = () => {
//     if (newReview && newReviewer) {
//       setReviews([
//         ...reviews,
//         { id: reviews.length + 1, name: newReviewer, comment: newReview },
//       ]);
//       setNewReviewer("");
//       setNewReview("");
//     }
//   };

//   return (
//     <div className="product-details-container">
//       {/* Left Column: Product Image */}
//       <div className="product-image-container">
//         <img src={sampleProduct.image} alt={sampleProduct.name} />
//       </div>

//       {/* Right Column: Product Info */}
//       <div className="product-info-container">
//         <h1>{sampleProduct.name}</h1>
//         <p>{sampleProduct.description}</p>
//         <p className="product-price">{sampleProduct.price}</p>
//         <p className="product-rating">{sampleProduct.rating}</p>
//         <div className="product-actions">
//           <button className="add-to-cart">Add to Cart</button>
//           <button className="buy-now">Buy Now</button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="reviews-container">
//         <h3>Reviews:</h3>
//         {reviews.map((review) => (
//           <div className="review" key={review.id}>
//             <p>
//               <strong>{review.name}:</strong> {review.comment}
//             </p>
//           </div>
//         ))}

//         {/* Add a new review */}
//         <div className="add-review">
//           <h4>Add a Review:</h4>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={newReviewer}
//             onChange={(e) => setNewReviewer(e.target.value)}
//           />
//           <textarea
//             placeholder="Write your review here..."
//             value={newReview}
//             onChange={(e) => setNewReview(e.target.value)}
//           ></textarea>
//           <button onClick={handleAddReview}>Submit Review</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Products.css";

const ProductDetails = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [reviews, setReviews] = useState([
    { id: 1, name: "John", comment: "Great product! Highly recommend." },
    { id: 2, name: "Amy", comment: "I didn't like the quality as much." },
  ]);

  const sampleProduct = {
    id: 1,
    name: "HERSHEY’S Dark Bar | 40g",
    description: "Deliciously Dark Cocoa Rich Chocolate",
    price: "₹ 60.00",
    rating: "★★★★★",
    image: "/img/choc.jpg",
  };

  const [newReview, setNewReview] = useState("");
  const [newReviewer, setNewReviewer] = useState("");

  const handleAddReview = () => {
    if (newReview && newReviewer) {
      setReviews([
        ...reviews,
        { id: reviews.length + 1, name: newReviewer, comment: newReview },
      ]);
      setNewReviewer("");
      setNewReview("");
    }
  };

  const handleBuyNow = () => {
    // Redirect to the payment gateway page with product details
    navigate("/PaymentGateway", { state: { product: sampleProduct } });
  };

  return (
    <div className="product-details-container">
      {/* Left Column: Product Image */}
      <div className="product-image-container">
        <img src={sampleProduct.image} alt={sampleProduct.name} />
      </div>

      {/* Right Column: Product Info */}
      <div className="product-info-container">
        <h1>{sampleProduct.name}</h1>
        <p>{sampleProduct.description}</p>
        <p className="product-price">{sampleProduct.price}</p>
        <p className="product-rating">{sampleProduct.rating}</p>
        <div className="product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-container">
        <h3>Reviews:</h3>
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <p>
              <strong>{review.name}:</strong> {review.comment}
            </p>
          </div>
        ))}

        {/* Add a new review */}
        <div className="add-review">
          <h4>Add a Review:</h4>
          <input
            type="text"
            placeholder="Your Name"
            value={newReviewer}
            onChange={(e) => setNewReviewer(e.target.value)}
          />
          <textarea
            placeholder="Write your review here..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          ></textarea>
          <button onClick={handleAddReview}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

