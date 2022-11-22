import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import { useContext } from 'react';
import CartContext from '../store/cart-context';

const HeaderCartButton = props =>{

    // where onClick is a keyword and onClick in props.onClick would be any custom-name coming fom other component

    const cartCtx = useContext(CartContext);
    // const numberOfCartItems = cartCtx.items.length;

    // syntax : reduce(function, initial-value );
    const numberOfCartItems = cartCtx.items.reduce((curNumber, items) => {
        return curNumber + items.amount;
    }, 0 );
    
      return (
          <button className={classes.button} onClick={props.onClick}>  
              <span className={classes.icon}>
                  <CartIcon />
              </span>
              <span>Your Cart</span>
              <span className={classes.badge}>{numberOfCartItems}</span>
          </button>
      );

}

export default HeaderCartButton;