import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './order-item.styles.scss';

const OrderItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='order-item-container'>
      <div className='order-image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='quantity-button' onClick={removeItemHandler}>
          <span>-</span>
        </div>
        <span className='value'>{quantity}</span>
        <div className='quantity-button' onClick={addItemHandler}>
          <span>+</span>
        </div>
      </span>
      <span className='price'> ${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default OrderItem;
