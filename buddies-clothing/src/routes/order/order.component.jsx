import { Fragment, useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'


import { CartContext } from '../../contexts/cart.context';


//import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './order.styles.scss';

const defaultFormFields = {
  deliveryAddress: '',
  cardNumber: '',
  nameOnCard: '',
  expiryDate: '',
};



const Order = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { deliveryAddress, cardNumber, nameOnCard, expiryDate } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  const navigate = useNavigate();

  const handleSubmit = () => {

    Swal.fire({
      title:'Your payment was successful!',
      text:'You will receive your order soon!',
      icon:'success'
 
    })

    resetFormFields();
    navigate('/');


  };
  const handleChange = (event) =>{
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });


  };
  
  const { cartTotal } = useContext(CartContext);
  const  taxAmount  = (Number(cartTotal)*0.13).toFixed(2);
  const  deliveryFee  = 20.00;
  const  paymentAmount  = (Number(cartTotal) + +taxAmount + deliveryFee).toFixed(2); 
  return (
    <Fragment>
      <h1>Order</h1>
      <div className='order-page-container'>
        <div className='order-page-containers'>
          <h2 className='order-header'>Payment Details</h2>
          <div className='order-details'>
            <span className='order-details-text'>Payment Amount</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className='order-details'>
            <span className='order-details-text'>GST/HST (13%)</span>
            <span>${taxAmount}</span>
          </div>
          <div className='order-details'>
            <span className='order-details-text'>Shipping and Handling</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className='order-details'>
            <span className='order-details-text'>Total Amount Due</span>
            <span>${paymentAmount}</span>
          </div>
        </div>



        <div className='order-page-containers'>
          <div className='payment-form'>
            <h2 className='order-header'>Card Details</h2>
              <form onSubmit={() => handleSubmit()}>
                <FormInput
                  label='Address'
                  type='text'
                  required
                  onChange={handleChange}
                  name='deliveryAddress'
                  value={deliveryAddress}
                />

                <FormInput
                  label='Card Number'
                  type='text'
                  required
                  onChange={handleChange}
                  name='cardNumber'
                  value={cardNumber}
                />

                <FormInput
                  label='Name on Card'
                  type='text'
                  required
                  onChange={handleChange}
                  name='nameOnCard'
                  value={nameOnCard}
                />

                <FormInput
                  label='Expiry Date'
                  type='text'
                  required
                  onChange={handleChange}
                  name='expiryDate'
                  value={expiryDate}
                />
                <Button buttonType={'submit'}>Place Order</Button>
              </form>
          </div>
        </div>

      </div>
    </Fragment>

  );
};

export default Order;
