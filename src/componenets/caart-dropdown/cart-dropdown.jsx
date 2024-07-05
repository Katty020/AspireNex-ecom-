import {CartDropdownContainer, EmptyMEssage ,CartItems} from './cart-dropdown.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-dropdown.context'
import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'
const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext)
    const navigate =useNavigate()
    const goToCheckoutHandler=()=>{
        navigate('/checkout')
    }
    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ?  (cartItems.map(item=><CartItem key={item.id} cartItem={item}/>)) :(<span>Your cart is empty</span>)

            }
            </CartItems>
            <Button buttonType='inverted' onClick={goToCheckoutHandler}> GO TO THE CHECKOUT</Button>


        </CartDropdownContainer>
    )
}
export default CartDropdown