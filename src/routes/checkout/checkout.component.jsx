import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-dropdown.context'
import CheckoutItem from '../../componenets/checkout-item/checkout.component'
import CartItem from '../../componenets/cart-item/cart-item.component'
const Checkout =()=>{

    const {cartItems,addItemToCart ,removeItemToCart,cartTotal }=useContext(CartContext)
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
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}  />
            ))}
            <span className='Total'>Total :${cartTotal}</span>        </div>
    )
}

export default Checkout