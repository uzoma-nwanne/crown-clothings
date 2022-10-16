import { Fragment } from 'react';
import { Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { onSignOutStart } from '../../store/user/user.saga';
import {NavigationContainer, NavLink, NavLinksContainer, LogoContainer} from './navigation.styles';



const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUserHandler = async () =>{
    dispatch(onSignOutStart);
  }
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser? 
           (<span className='nav-link' onClick={signOutUserHandler}> SIGN OUT</span>)
          :
          (<NavLink  to='/auth'>
            SIGN IN
          </NavLink>)}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;