import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import api from './../../api';
import uuid from 'react-uuid';
import './CheckoutForm.scss';
import puppySuccess from './../../images/puppySuccess.png';


export default function CheckoutForm (props) {
    const [style, setStyle]=useState('');
    const [crust, setCrust] = useState('');
    const [cheese, setCheese] = useState(false);
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [saving, setSaving] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);

    const handleStyleChange = (event) => {
        const value = event.target.value;
        setStyle(value);
    }
    const handleCrustChange = (event) => {
        const value = event.target.value;
        setCrust(value);
    }
   
    const handleCheeseChange = (event) => {
        const value = event.target.checked;
        setCheese(value);
    }
    const handleUserNameChange = (event) => {
        const value = event.target.value;
        setUserName(value);
    }
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        // Validate the state
        let errors = [];
        if (style === '') {
            errors.push('Please Choose Style');
        }
        if (crust === '') {
            errors.push('Please Choose Crust');
        }

        if (userName === '') {
            errors.push('Please Enter Your Name');
        }

        if (address === '') {
            errors.push('Please Enter Your Address');
        }

        if (errors.length > 0) {
            setErrorMessage(errors);
        }

        else { // There are no error on the form

            let data = {
                "id": uuid(),
                "style": style,
                "crust": crust,
                "cheese": cheese,
                "name": userName,
                "address": address             
            };

            setSaving(true);

            api.post('/orders', data)
                .then((response) => {
                    console.log(response.data);
                    if (response.status === 201) {
                        setErrorMessage(null);
                        setFormSubmited(true);
                     }
                });

        }

    }

    const renderSuccess = () => {
        return (
            <div className='success-submit'>
                <strong>Success!
                    <br /> Your order was submitted!
                    <br/>
                    <img src={puppySuccess} alt="puppySuccess" />
                </strong>
            </div>
        );
    }
    const renderForm = () => {

    return (
        <Form onSubmit={handleSubmitForm} className="form"> 
            {errorMessage && (
                <div className='error'>
                    Please, verify the entered data:
                    <ul>
                        {errorMessage.map(
                            (error, index) => (
                                <li key={index}>{error}</li>
                            )
                        )}
                    </ul>
                </div>
            )}
        <div>
                <h5>Please, choose your Style and Crust: </h5>
                <label> Style: </label>
                <br/>
                <Form.Select className="form-select" style={{ width: "248px" }} aria-label="Default select example" value={style}
                    onChange={handleStyleChange}>
                    <option>-Select-</option>
                    <option value="Hawaiian"> Hawaiian </option>
                    <option value="Pepperoni"> Pepperoni </option>
                    <option value="Canadian"> Canadian </option>
                    <option value="Supreme"> Supreme </option>
                    <option value="Cheese"> Cheese </option>
                    <option value="Margherita">Margherita </option>
                </Form.Select>
                <label> Crust: </label>
                <br />
                <Form.Select className="form-select" aria-label="Default select example" style={{ width: "248px" }}  value={crust}
                    onChange={handleCrustChange}>
                    <option>-Select-</option>
                    <option value="Original"> Original </option>
                    <option value="Thin"> Thin </option>
                    <option value="Gluten-free"> Gluten-free </option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Extra Cheese" checked={cheese}
                        onChange={handleCheeseChange} />
                </Form.Group>
                <h5>  Your Name and Address: </h5>
        </div>
            <Form.Group className="col-md-2" controlId="formBasicEmail">
                    <Form.Label> Your Name: </Form.Label>
                    <br/>
                    <Form.Control type="text" placeholder="Enter Your Name" value={userName}
                        onChange={handleUserNameChange} />   
                </Form.Group>

                <Form.Group className="col-md-2" controlId="formBasicPassword">
                    <Form.Label> Your Address: </Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Address" value={address}
                        onChange={handleAddressChange} />
                </Form.Group>
                <br/>
            <Button style={{ backgroundColor: "#1F7A8C", borderColor: "#1F7A8C"}} type="submit">
                    Order Now
                </Button>
            </Form>
    )
    }

    const renderSaving = () => {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                Saving... 
            <Spinner animation="border" role="status" style={{ color: "#1F7A8C"}}>
            <span className="visually-hidden">Saving...</span>
            </Spinner>
            </div>
        );
    }

    // return formSubmited
    // 	? renderSuccess()
    // 	: renderForm();

    if (formSubmited) {
        return renderSuccess();
    }
    else if (saving) {
        return renderSaving();
    }
     else {
      return renderForm();
    }
}