//import { useState } from 'react';
import { useEffect, useState } from 'react';
import api from './../../api';
//import uuid from 'react-uuid';
import Order from '../Orders/Order/Order';
import { Spinner } from 'react-bootstrap';
//import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        api.get('/orders')
            .then((response) => {
                console.log('response', response);
                if (response.status === 200) {
                    const orders = response.data;
                   // console.log ("This is order"+ orders);
                    setOrders(orders);
                    setLoading(false);
                }
            });

    }, []);

    const handleTaskRemove = (id) => {
        api.delete(`/orders/${id}`)
            .then((response) => {
                 let updatedOrders = orders.filter(
                    (order) => order.id !== id
        );
                if (response.status === 200) {
                    setOrders(updatedOrders);
                    console.log (updatedOrders);
                }
            });
    }
    return (
        <div>
            <h3 style={{ padding: 20}}> List of Orders: </h3>
             {loading && (
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    Loading... 
                    <Spinner animation="border" role="status" style={{ color: "#1F7A8C" }}>
                        <span className="visually-hidden">loading...</span>
                    </Spinner>
                    </div>
            )}
            {orders.map(
                (order, index) => (
                    <Order
                        key={index}
                        order={order}
                        // handleStatusChange={handleStatusChange}
                        handleTaskRemove={handleTaskRemove}
                    />
                )
            )}
        </div>
    );
}