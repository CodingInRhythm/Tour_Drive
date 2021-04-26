import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import { Redirect } from 'react-router-dom'

const SignupFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.sure)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/" />;

    const onSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
        const payload = {
            username,
            email, 
            password,
            image
        }
        setErrors([])
       return dispatch(sessionActions.signup(payload)).catch(
           async(res) => {
               const data = await res.json();
               if(data && data.errors) setErrors(data.errors)
               console.log(errors)
            }
            )
        }
        return setErrors([
          "Confirm Password field must be the same as the Password field",
        ]);
    }

     const updateFile = (e) => {
       const file = e.target.files[0];
       if (file) setImage(file);
     };

    return (
      <form onSubmit={onSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          {" "}
          Username
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          {" "}
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          {" "}
          Password
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label>
          <input type="file" onChange={updateFile} />
          <button>Add Image</button>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
}

export default SignupFormPage