import './CheckoutPage.css'
import './CheckoutHeader.css'
import CheckoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png';
import Logo from '../../assets/images/logo.png';
import MobileLogo from '../../assets/images/mobile-logo.png';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

function CheckoutPage({ cart }) {
  
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(()=>{
    const fetchCheckoutData=async () =>{
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOption(response.data);
      response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  },[]);



  return (
    <> 
        <title>Checkout Page</title>
        <link rel="icon" type="image/svg+xml" href="../public/cart-favicon.png" />
        <div className="checkout-header">
        <div className="header-content">
            <div className="checkout-header-left-section">
            <a href="/">
                <img className="logo" src={Logo} />
                <img className="mobile-logo" src={MobileLogo} />
            </a>
            </div>

            <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link"
                href="/">3 items</a>)
            </div>

            <div className="checkout-header-right-section">
            <img src={CheckoutLockIcon} />
            </div>
        </div>
        </div>

        <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
            <OrderSummary cart={cart} deliveryOption={deliveryOption} />
            <PaymentSummary paymentSummary={paymentSummary} />

        </div>
        </div>
    </>
  )
}

export default CheckoutPage