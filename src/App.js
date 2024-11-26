import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Subscriptions from './Subscriptions';
import Bucket from './Bucket';
import ContactForm from './ContactForm';
import Featured from './Featured';
import Products from './Products';  // Product details page
import PeriodTracker from './PeriodTracker';
import GynacConsultation from './GynacConsultation';
import PaymentGateway from './PaymentGateway';

function App() {

    return (
        <>
            <Nav /> {/* The navigation component remains unchanged */}
            <Routes>
                {/* Existing Routes */}
                <Route path="/" element={<Featured />} />
                <Route path="/Subscriptions" element={<Subscriptions />} />
                <Route path="/Bucket" element={<Bucket />} />
                <Route path="/ContactForm" element={<ContactForm />} />

                {/* Route for product details page */}
                <Route path="/product/:productId" element={<Products />} />
                <Route path="/PeriodTracker" element={<PeriodTracker />} />
                <Route path="/GynacConsultation" element={<GynacConsultation />} />
                <Route path="/PaymentGateway" element={<PaymentGateway />} />


               
            </Routes>
        </>
    );
}

export default App;
