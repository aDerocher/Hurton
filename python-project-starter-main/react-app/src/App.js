import React, { useState, useEffect } from 'react';
import { BrowserRouter, useParams, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import NavBarSimple from './components/NavBarSimple';
import NavBarSimpleText from './components/NavBarSimpleText';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import ProfilePage from './components/ProfilePage';
import ProfileEdit from './components/ProfileEdit';
import ProfileOrderHist from './components/ProfileOrderHist';
import Wishlist from './components/Wishlist';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
// import ProfileSidebar from './components/ProfileSidebar';
import Shop from './components/Shop';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import ItemDetails from './components/item-comps/ItemDetails';
import About from './components/About';
import { authenticate } from './store/session';
import "./index.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true}>
                    <NavBar />
                    <SplashPage />
                    <Footer />
                </Route>

                <Route path='/shop' exact={true}>
                    <NavBar />
                    <Shop />
                    <Footer />
                </Route>
                <Route path='/shop/snowboards/:itemId' exact={true}>
                    <NavBar />
                    <ItemDetails />
                    <Footer />
                </Route>
                <Route path='/shop/jackets/:itemId' exact={true}>
                    <NavBar />
                    <ItemDetails />
                    <Footer />
                </Route>
                <Route path='/shop/boots/:itemId' exact={true}>
                    <NavBar />
                    <ItemDetails />
                    <Footer />
                </Route>
                <Route path='/shop/bindings/:itemId' exact={true}>
                    <NavBar />
                    <ItemDetails />
                    <Footer />
                </Route>

                <Route path='/login' exact={true}>
                    <NavBarSimple />
                    <LoginForm />
                </Route>
                <Route path='/sign-up' exact={true}>
                    <NavBarSimple />
                    <SignUpForm />
                </Route>

                <Route path='/cart' exact={true} >
                    <NavBar />
                    <CartPage />
                    <Footer />
                </Route>
                <Route path='/cart/checkout/:subtotal' exact={true} >
                    <NavBarSimpleText />
                    <CheckoutPage />
                    <Footer />
                </Route>

                <Route path='/about' exact={true} >
                    <NavBarSimple />
                    <About/>
                </Route>
                <ProtectedRoute path='/users/:userId' exact={true} >
                    <NavBar />
                    <ProfilePage />
                    <Footer />
                </ProtectedRoute>
                <ProtectedRoute path='/users/:userId/edit-profile' exact={true} >
                    <NavBar />
                    <ProfileEdit />
                    <Footer />
                </ProtectedRoute>
                <ProtectedRoute path='/users/:userId/order-history' exact={true} >
                    <NavBar />
                    <ProfileOrderHist />
                    <Footer />
                </ProtectedRoute>
                <ProtectedRoute path='/users/:userId/wishlist' exact={true} >
                    <NavBar />
                    <Wishlist />
                    <Footer />
                </ProtectedRoute>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
