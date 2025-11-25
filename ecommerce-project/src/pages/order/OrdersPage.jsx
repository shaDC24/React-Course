import './OrdersPage.css'
import Header from '../../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OrdersGrid } from './OrdersGrid';



function OrdersPage({cart}) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData=async () =>{
            let response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        };
        fetchOrdersData();
    },[]);
    return (
        <div>
            
            <title>Orders - Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="./public/orders-favicon.png" />
             <Header cart={cart}/>

            <div className="orders-page">
            <div className="page-title">Your Orders</div>

            <OrdersGrid orders={orders} />
            </div>
        </div>
    );
}
export default OrdersPage;