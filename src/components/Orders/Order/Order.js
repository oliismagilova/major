import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';
import './../Order/Order.scss';
import pizzaCard from './../../../images/pizzaCard.png';



function Order(props) {
    
    const handleRemoveClick = () => {
        const id = props.order.id;
        props.handleTaskRemove(id);
    }

    return (
        <div className='task-component'>
            <Card className="card" style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title className="cardTitle"><b>{props.order.name} 
                     <img src={pizzaCard} alt="pizza" style={{ width: '50px' }} /> 
                     </b>
                     </Card.Title>                    
                    <Card.Text>
                        Address: {props.order.address} 
                        <br/>
                        Order: {props.order.style}, {props.order.crust}
                        <br />
                        Extra Cheese: {props.order.cheese
                            ? <span style={{ color: '#1F7A8C' }}> Yes </span>
                            : <span style={{ color: '#F75C84' }}> No </span>
                        }
                    </Card.Text>
                    <Button onClick={handleRemoveClick} style={{ backgroundColor: "#F75C84", borderColor: "#F75C84" , marginLeft: 20 }}> Remove Order</Button>
                </Card.Body>
            </Card>
           </div>  
    );
}

export default Order;