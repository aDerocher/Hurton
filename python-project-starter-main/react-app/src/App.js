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
        <Route path='/login' exact={true}>
            <LoginForm />
        </Route>

        <Route path='/shop' exact={true}>
            <Shop />
        </Route>

        <Route path='/shop/:item_type' exact={true}>
            <Shop />
        </Route>

        <Route path='/sign-up' exact={true}>
            <SignUpForm />
        </Route>

        <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact={true} >
            <ProfilePage />
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId/cart' exact={true} >
            <Cart />
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

        <ProtectedRoute path='/' exact={true} >
            <h1>My Home Page</h1>
            <br />
            <p>Splash component to be created</p>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
