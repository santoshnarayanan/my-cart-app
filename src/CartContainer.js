import React from 'react';
import { useGlobalContext } from './context';
import CartItem from './CartItem';

const CartContainer = () => {
    const { cart, amount } = useGlobalContext();
    if (cart.length === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>your wishlist</h2>
                    <h4 className='emoty-cart'>is currently empty</h4>
                </header>
            </section>

        )
    }

    return (
        <section className="cart">
            <header>
                <h2>your wish list</h2>
            </header>
            {/* cart items */}
            <div>
                {
                    cart.map((item)=> {
                        return (<CartItem key={item.id} {...item} />);
                    })
                }
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>₹{amount}</span></h4>
                </div>
                <button className="btn clear-btn" onClick={()=> console.log("clear cart")}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer