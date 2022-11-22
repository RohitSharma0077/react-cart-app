import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';

const HeaderCartButton = props =>{

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    // where onClick is a keyword and onClick in props.onClick would be any custom-name coming fom other component

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    // const numberOfCartItems = cartCtx.items.length;

    // syntax : reduce(function, initial-value );
    const numberOfCartItems = cartCtx.items.reduce((curNumber, items) => {
        return curNumber + items.amount;
    }, 0 );

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
      if (items.length === 0) {
        return;
      }
      setBtnIsHighlighted(true);
  
      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);
  
      return () => {
        clearTimeout(timer);
      };
    }, [items]);
    
      return (
          <button className={btnClasses} onClick={props.onClick}>  
              <span className={classes.icon}>
                  <CartIcon />
              </span>
              <span>Your Cart</span>
              <span className={classes.badge}>{numberOfCartItems}</span>
          </button>
      );

}

export default HeaderCartButton;