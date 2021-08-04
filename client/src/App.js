import React, { useState, useEffect } from 'react';
import {
  Link,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import Manu from './components/Manu/Manu';
import Products from './pages/products/products';
import BottomBlackStrip from './components/bottomBlackStrip/bottomBlackStrip';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import Faq from './pages/faq/faq';
import ContactUs from './pages/contactUs/contactUs';
import Item from './pages/item/item';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';


function App() {

  const [isCheckout, setIsCheckout] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/checkout")
      setIsCheckout(true)
    else
      setIsCheckout(false)
  }, [location])

  return (
    <div className="app">
      {!isCheckout &&
        <>
          <TopNavBar />
          <Link to="/">
            <img className="app__logo" src='../images/logohere.png' />
          </Link>
          <Manu />
        </>
      }
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path={`/item/:id`}>
          <Item />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Route path="/checkout">
        <Checkout />
      </Route>
      {!isCheckout &&
        <>
          <BottomBlackStrip />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
