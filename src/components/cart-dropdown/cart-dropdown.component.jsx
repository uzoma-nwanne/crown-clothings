import React from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import {CartDropdownContainer, EmptyMessage, CartItems} from'./cart-dropdown.styles';
import { useContext } from 'react';
import  {CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  const gotoCheckOutHandler = ()=>{
    navigate("/checkout");
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotoCheckOutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;