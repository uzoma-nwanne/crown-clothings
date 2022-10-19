import { useSelector } from 'react-redux/es/exports';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import './checkout.styles.scss';
const Checkout = ()=>{
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const amount = cartTotal * 100;
    const email = currentUser.email ? currentUser.email : 'user@example.com';
    const config = {
      reference: ((new Date()).getTime() * Math.random()).toString(),
      email: email,
      amount: amount,
      publicKey: 'pk_test_15488c24a7902fd27bac6c3331b5aa815af38e54',
  };
  console.log(currentUser);
  const onSuccess = (reference) =>{
    console.log(reference);
  }

  const onClose = ()=>{
    console.log('Closed');
  }
    return(
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
        <PaymentForm config={config} onClose={onClose} onSuccess={onSuccess}/>
      </div>
    )
}

export default Checkout