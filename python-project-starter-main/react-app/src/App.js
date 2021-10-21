import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import ProfilePage from './components/ProfilePage';
import ProfileEdit from './components/ProfileEdit';
import ProfileOrderHist from './components/ProfileOrderHist';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
// import ProfileSidebar from './components/ProfileSidebar';
import Shop from './components/Shop';
import SplashPage from './components/SplashPage';
import Snowboard from './components/item-comps/Snowboard';
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
      <NavBar />
      <Switch>
          
        <Route path='/' exact={true}>
            <SplashPage />
        </Route>

        <Route path='/shop' exact={true}>
            <Shop />
        </Route>
        <Route path='/shop/snowboard/:itemId' exact={true}>
            <Snowboard />
        </Route>

        <Route path='/login' exact={true}>
            <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
            <SignUpForm />
        </Route>

        <Route path='/cart' exact={true} >
            <Cart />
        </Route>
        {/* <Route path='/cart/checkout' exact={true} >
            <Cart />
        </Route> */}

        <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
            <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/edit-profile' exact={true} >
            <ProfileEdit />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/order-history' exact={true} >
            <ProfileOrderHist />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/wishlist' exact={true} >
            <Wishlist />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
