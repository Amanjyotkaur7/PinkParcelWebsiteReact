// // import React, { useState } from 'react';
// // import './ContactForm.css';


// // const ContactForm = () => {
// //   const [name, setName] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [comment, setComment] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [feedback, setFeedback] = useState('');

// //   const validateEmail = (email) => {
// //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// //   };

// //   const validatePhoneNumber = (phoneNumber) => {
// //     return /^[0-9]{10}$/.test(phoneNumber);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setFeedback('');

// //     // Validate fields
// //     if (!name || !phoneNumber || !comment || !email) {
// //       setFeedback('Please fill out all fields.');
// //       return;
// //     }

// //     if (!validateEmail(email)) {
// //       setFeedback('Please enter a valid email address.');
// //       return;
// //     }

// //     if (!validatePhoneNumber(phoneNumber)) {
// //       setFeedback('Please enter a valid 10-digit phone number.');
// //       return;
// //     }

// //     setIsSubmitting(true);
// //     try {
// //       const response = await fetch('/api/ContactForm', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ name, phoneNumber, comment, email }),
// //       });

// //       // Check if response is successful
// //       if (!response.ok) {
// //         setFeedback(`Error: ${response.status} ${response.statusText}`);
// //         return;
// //       }

// //       // Try parsing the response as JSON
// //       const result = await response.json();

// //       // Check for any issues in the response data
// //       if (result.error) {
// //         setFeedback(`Error: ${result.error}`);
// //       } else {
// //         setFeedback('Contact form submitted successfully!');
// //         setName('');
// //         setPhoneNumber('');
// //         setComment('');
// //         setEmail('');
// //       }
// //     } catch (error) {
// //       // Log and show error message
// //       console.error('Error submitting contact form:', error);
// //       setFeedback('Error submitting contact form: ' + error.message);
// //     }
// //     setIsSubmitting(false);
// //   };

// //   return (
// //     <>
// //     <div className="heading">Contact Us</div>
// //     <form onSubmit={handleSubmit} className="contact-pink-parcel">
// //       <div>
        
// //         <input
// //           type="text"
// //           id="name"
// //           value={name}
// //           placeholder='Name: '
// //           onChange={(event) => setName(event.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
       
// //         <input
// //           type="tel"
// //           id="phoneNumber"
// //           value={phoneNumber}
// //            placeholder='Phone Number: '
// //           onChange={(event) => setPhoneNumber(event.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
        
// //         <input
// //           type="email"
// //           id="email"
// //           value={email}
// //           placeholder='Email: '

// //           onChange={(event) => setEmail(event.target.value)}
// //           required
// //         />
// //       </div>
// //       <div>
         
// //         <textarea
// //           id="comment"
// //           value={comment}
// //           placeholder='Comment: '
// //           onChange={(event) => setComment(event.target.value)}
// //           required
// //         />
// //       </div>
// //       <button type="submit" disabled={isSubmitting}>
// //         {isSubmitting ? 'Sending...' : 'Send'}
// //       </button>
// //       {feedback && <p className="feedback-message">{feedback}</p>}
// //     </form> 
// //     <div className='sub'><h1>Subscribe to our emails</h1>
// //     <h3>Join our email list for exclusive offers and the latest news.</h3>
   
// //         </div>
// //         <div className="email-input-container">
// //           <input type="email" placeholder="Email" className="email-input" />
// //           <button className="arrow-button">→</button>
        
// //          </div>

// //          <div className="footer-section">
// //         <p className="company-name">PinkParcel Services LLP</p>
// //         <p className="contact-number">+91 98778 29376</p>
// //         <p className="contact-email">getpinkparcelindia@gmail.com</p>
// //         </div>
// //         <div className="policies">
// //           <span>© 2024, Pink Parcel Powered by Shopify · </span>
// //           <a href="#refund-policy" className="policy-link">Refund policy</a> · 
// //           <a href="#privacy-policy" className="policy-link">Privacy policy</a> · 
// //           <a href="#terms-service" className="policy-link">Terms of service</a> · 
// //           <a href="#shipping-policy" className="policy-link">Shipping policy</a>
// //         </div>
     

// //     </>
// //   );
// // };

// // export default ContactForm;

// import React, { useState } from 'react';
// import './ContactForm.css';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [comment, setComment] = useState('');
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [feedback, setFeedback] = useState('');

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     return /^[0-9]{10}$/.test(phoneNumber);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setFeedback('');

//     // Validate fields
//     if (!name || !phoneNumber || !comment || !email) {
//       setFeedback('Please fill out all fields.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setFeedback('Please enter a valid email address.');
//       return;
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       setFeedback('Please enter a valid 10-digit phone number.');
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch('http://localhost/pink/submitContactForm.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, phoneNumber, comment, email }),
//       });

//       // Check if response is successful
//       if (!response.ok) {
//         setFeedback(`Error: ${response.status} ${response.statusText}`);
//         return;
//       }

//       // Try parsing the response as JSON
//       const result = await response.json();

//       // Check for any issues in the response data
//       if (result.error) {
//         setFeedback(`Error: ${result.error}`);
//       } else {
//         setFeedback('Contact form submitted successfully!');
//         setName('');
//         setPhoneNumber('');
//         setComment('');
//         setEmail('');
//       }
//     } catch (error) {
//       // Log and show error message
//       console.error('Error submitting contact form:', error);
//       setFeedback('Error submitting contact form: ' + error.message);
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <>
//       <div className="heading">Contact Us</div>
//       <form onSubmit={handleSubmit} className="contact-pink-parcel">
//         <div>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             placeholder='Name: '
//             onChange={(event) => setName(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             placeholder='Phone Number: '
//             onChange={(event) => setPhoneNumber(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             placeholder='Email: '
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             id="comment"
//             value={comment}
//             placeholder='Comment: '
//             onChange={(event) => setComment(event.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Sending...' : 'Send'}
//         </button>
//         {feedback && <p className="feedback-message">{feedback}</p>}
//       </form>
//       <div className='sub'>
//         <h1>Subscribe to our emails</h1>
//         <h3>Join our email list for exclusive offers and the latest news.</h3>
//       </div>
//       <div className="email-input-container">
//         <input type="email" placeholder="Email" className="email-input" />
//         <button className="arrow-button">→</button>
//       </div>
//       <div className="footer-section">
//         <p className="company-name">PinkParcel Services LLP</p>
//         <p className="contact-number">+91 98778 29376</p>
//         <p className="contact-email">getpinkparcelindia@gmail.com</p>
//       </div>
//       <div className="policies">
//         <span>© 2024, Pink Parcel Powered by Shopify · </span>

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^[0-9]{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback('');

    // Validate fields
    if (!name || !phoneNumber || !comment || !email) {
      setFeedback('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setFeedback('Please enter a valid email address.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setFeedback('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost/pink/submitContactForm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNumber, comment, email }),
      });

      // Check if response is successful
      if (!response.ok) {
        setFeedback(`Error: ${response.status} ${response.statusText}`);
        return;
      }

      // Try parsing the response as JSON
      const result = await response.json();

      // Check for any issues in the response data
      if (result.error) {
        setFeedback(`Error: ${result.error}`);
      } else {
        setFeedback('Contact form submitted successfully!');
        setName('');
        setPhoneNumber('');
        setComment('');
        setEmail('');
      }
    } catch (error) {
      // Log and show error message
      console.error('Error submitting contact form:', error);
      setFeedback('Error submitting contact form: ' + error.message);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="heading">Contact Us</div>
      <form onSubmit={handleSubmit} className="contact-pink-parcel">
        <div>
          <input
            type="text"
            id="name"
            value={name}
            placeholder='Name: '
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            placeholder='Phone Number: '
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='Email: '
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            id="comment"
            value={comment}
            placeholder='Comment: '
            onChange={(event) => setComment(event.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {feedback && <p className="feedback-message">{feedback}</p>}
      </form>
      <div className='sub'>
        <h1>Subscribe to our emails</h1>
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
};

export default ContactForm;