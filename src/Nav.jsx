import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import './Global.css';

function Nav() {
  return (
    <>
      <div className='searchicon'> 
        <i className="bi bi-search-heart fs-1"></i>
        <h1>Pink Parcel</h1>
         <i className="bi bi-bag-heart fs-1"></i>
      </div>
      
      <nav className='navbar'>
        <ul className='nav-list'>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/subscriptions">Subscriptions</Link></span>
          <span><Link to="/Bucket">Create Your Own Bucket</Link></span>
          <span><Link to="/GynacConsultation">Consultation</Link></span>
          <span><Link to="/PeriodTracker">Period Tracker</Link></span>
          <span><Link to="/ContactForm">Contact</Link></span>
        
        </ul>
      </nav>
    </>
  );
}

export default Nav;
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// function Nav() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/Subscriptions">Subscriptions</Link></li>
//                 <li><Link to="/Bucket">Bucket</Link></li>
//                 <li><Link to="/ContactForm">Contact</Link></li>
//                 <li><Link to="/cart">Cart</Link></li> {/* Link to Cart page */}
//             </ul>
//         </nav>
//     );
// }

// export default Nav;

