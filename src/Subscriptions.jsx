import React from "react";
import './Global.css';
import './Subscriptions.css';


function Subscriptions(){

    const bgColor = "rgba(234, 221, 223, 0.707)";
    return(
<>
<div className='section' style={{ backgroundColor: bgColor }}>
                <div className='featuring'>
                    <h1 className='Fheading'>Featured Packages</h1>
                    <div className='product-slider'>
                        <div className='package basic'>
                            <img src="https://pinkparcel.in/cdn/shop/files/1.png?v=1711734029&width=360" alt="basic" />
                            <h1 className='typePackage'>Basic Packaging </h1>
                            <span className='p'>From ₹ 128.00</span>
                            <h4 className='star'>★★★★★</h4>
                        </div>

                        <div className='package standard'>
                            <img src="https://pinkparcel.in/cdn/shop/files/2.png?v=1711734137&width=360" alt="standard" />
                            <h1 className='typePackage '>Standard Packaging </h1>
                            <span className='p'><del>₹ 550.00</del> From ₹ 269.00</span>
                            <h4 className='star'>★★★★★</h4>
                        </div>

                        <div className='package premium'>
                            <img src="https://pinkparcel.in/cdn/shop/files/3.png?v=1711734137&width=360" alt="premium" />
                            <h1 className='typePackage'>Premium Packaging</h1>
                            <span className='p'><del>₹ 650.00</del> From ₹ 543.00</span>
                            <h4 className='star'>★★★★★</h4>
                        </div>
                    </div>
                </div>
            </div>
    <div className='sub'><h1>Subscribe to our emails</h1>
    <h3>Join our email list for exclusive offers and the latest news.</h3>
   
        </div>
        <div className="email-input-container">
          <input type="email" placeholder="Email" className="email-input" />
          <button className="arrow-button">→</button>
        
         </div>

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
export default Subscriptions;
