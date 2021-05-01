import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage'
import { useDispatch } from 'react-redux'
import * as sessionActions from "./store/session";
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation'
import MusicPlayer from './components/MusicPlayer';
import AlbumPage from './components/AlbumPage';
import UserProfilePage from './components/UserProfilePage'
import HomePage from './components/HomePage'
function App() {
const dispatch = useDispatch()

const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])
  
  
  return (
    <>
    <Navigation isLoaded={isLoaded}></Navigation>
    {isLoaded && (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/albums/:id">
        <AlbumPage />
      </Route>
      <Route path='/user'>
        <UserProfilePage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
    )}
    </>
  );
}

export default App;
