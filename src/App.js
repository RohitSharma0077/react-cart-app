import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {

 const [cartisShown, setcartIsShown] =  useState(false);
 
 const showCartHandler = () => {
  setcartIsShown(true);
 }

 const hideCartHandler = () => {
  setcartIsShown(false);
 }

  // where onShowCart is any custom name but starts with on 
  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler} />}
      <Header  onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
};

export default App;
