import React, { useState, useEffect } from 'react';
import { BrowserRouter, useParams, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import NavBarSimple from './components/NavBarSimple';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
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
                <Route path='/shop/snowboard/:itemId' exact={true}>
                    <NavBar />
                    <ItemDetails />
                </Route>
                <Route path='/shop/jacket/:itemId' exact={true}>
                    <NavBar />
                    <ItemDetails />
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
                    <NavBar />
                    <CheckoutPage />
                    <Footer />
                </Route>

                {/* <ProtectedRoute path='/users' exact={true} >
                    <NavBar />
                    <UsersList/>
                </ProtectedRoute> */}
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
