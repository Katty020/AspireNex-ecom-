import { Outlet} from "react-router-dom";
import { Fragment ,useContext} from "react";
import {ReactComponent as CrownLogo } from '../../asssets/crown.svg'
import {NavigationCotainer, NavLinks,NavLink,LogoContainer} from './navigation.styles.jsx'
import CartDropdown from "../../componenets/caart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart-dropdown.context";
import CartIcon from "../../componenets/cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen}=useContext(CartContext)


  return (
    <Fragment>
      <NavigationCotainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationCotainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;