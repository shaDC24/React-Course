import { useEffect,useState } from 'react';
import './TrackingPage.css'
import { useParams } from 'react-router';
import Header from '../../components/Header';
import dayjs from 'dayjs';
import axios from 'axios';
// import { getTimePercentage } from '../../utils/time';



function TrackingPage({cart}) {
    const {orderId, productId} = useParams();
    const [order,setOrder] = useState(null);
    useEffect(()=>{
        const fetchTrackingData=async () =>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        };
        fetchTrackingData();
    },[orderId]);

    if(!order){
        return null;
    }

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
    if (deliveryPercent > 100) {
        deliveryPercent = 100;
    }

    let isPreparing = false;
    let isShipped = false;
    let isDelivered = false;

    if (deliveryPercent < 33) {
        isPreparing = true;
    } else if (deliveryPercent >= 33 && deliveryPercent < 66) {
        isShipped = true;
    } else {
        isDelivered = true;
    }   

    return (
        <div>
            <link rel="icon" type="image/svg+xml" href="./public/tracking-favicon.png" />
            <title>Tracking Page</title>
            <Header cart={cart}/>

            <div className="tracking-page">
            <div className="order-tracking">
                <a className="back-to-orders-link link-primary" href="/orders">
                View all orders
                </a>

                <div className="delivery-date">
                {deliveryPercent >= 100 ? 'Delivered on ' : 'Arriving on '}    
                {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D, YYYY')}
                </div>

                <div className="product-info">
                {orderProduct.product.name}
                </div>

                <div className="product-info">
                Quantity: {orderProduct.quantity}
                </div>

                <img className="product-image" src={orderProduct.product.image} />

                <div className="progress-labels-container">
                <div className={`progress-label ${isPreparing && 'current-status'}`}>
                    Preparing
                </div>
                <div className={`progress-label ${isShipped && 'current-status'}`}>
                    Shipped
                </div>
                <div className={`progress-label ${isDelivered && 'current-status'}`}>
                    Delivered
                </div>
                </div>

                <div className="progress-bar-container">
                {/* <div className="progress-bar" style={{width: `${getTimePercentage(orderProduct.estimatedDeliveryTimeMs,order.orderTimeMs)}%`}}></div> */}
                <div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default TrackingPage;