import './CheckoutPage.css'
import './CheckoutHeader.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import { CheckoutHeader } from './CheckoutHeader';


function CheckoutPage({ cart,loadCart }) {
  
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(()=>{
    const fetchCheckoutData=async () =>{
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOption(response.data);
    };
    fetchCheckoutData();
  },[]);
  
    useEffect(()=>{
    const fetchPaymentData=async () =>{

      let response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    };
    fetchPaymentData();
  },[cart]);



  return (
    <> 
        <title>Checkout Page</title>
        <link rel="icon" type="image/svg+xml" href="../public/cart-favicon.png" />
        <CheckoutHeader totalItems={cart.length} />

        <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
            <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
            <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />

        </div>
        </div>
    </>
  )
}

export default CheckoutPage