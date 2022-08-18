import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';



const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const goToOrderHandler = () => {
    navigate('/order');
  };


  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <div className='order-button-container'>
        <Button onClick={goToOrderHandler}>Proceed to Order</Button>
      </div>
      

    </div>
  );
};

export default Checkout;
