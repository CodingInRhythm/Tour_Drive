import React, { useState } from 'react'
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state)=> state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);
 

    if (sessionUser) return (
        <Redirect to='/' />
    )
 const onSubmit = (e) => {
   e.preventDefault();
   setErrors([]);
   return dispatch(sessionActions.login({ credential, password })).catch(
     async (res) => {
       const data = await res.json();
       if (data && data.errors) setErrors(data.errors);
     }
   );
 };
    return (
      <form onSubmit={onSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username
          <input
            onChange={(e) => setCredential(e.target.value)}
            name="credential"
            type="text"
            value={credential}
          ></input>
        </label>
        <label>
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
          ></input>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    );
}


export default LoginFormPage