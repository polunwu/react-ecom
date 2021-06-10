import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionNavLink,
} from './header.styles';

const Header = ({ currentUser, cartHidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionNavLink to='/shop'>SHOP</OptionNavLink>
        <OptionNavLink to='/contact'>CONTACT</OptionNavLink>
        {currentUser ? (
          <OptionNavLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionNavLink>
        ) : (
          <OptionNavLink to='/signin'>SIGN IN</OptionNavLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutStart: () => dispatch(signOutStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
