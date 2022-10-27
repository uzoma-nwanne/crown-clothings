import { useSelector } from 'react-redux/es/exports';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import {CheckoutContainer,HeaderBlock, CheckoutHeader, Total} from './checkout.styles';


const Checkout = ()=>{
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const amount = cartTotal * 100;
    const email = currentUser?.email ? currentUser.email : 'user@example.com';
    const config = {
      reference: ((new Date()).getTime() * Math.random()).toString(),
      email: email,
      amount: amount,
      publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const onSuccess = (reference) =>{
    console.log(reference);
  }

  const onClose = ()=>{
    console.log('Closed');
  }
    return(
        <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>TOTAL: ${cartTotal}</Total>
        <PaymentForm config={config} onClose={onClose} onSuccess={onSuccess}/>
      </CheckoutContainer>
    )
}

export default Checkout