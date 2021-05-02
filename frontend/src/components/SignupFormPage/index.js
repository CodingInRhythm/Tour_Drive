import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session'
import { Redirect, useHistory } from 'react-router-dom'
import './SignupFormPage.css'

const SignupFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.sure)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([])
  const history = useHistory()
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
        dispatch(sessionActions.signup(payload)).catch(
           async(res) => {
             
               const data = await res.json();
               if(data && data.errors) setErrors(data.errors)
              
            }
            )
            history.push('/')
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
      <div className="sign-up-body">
        <form onSubmit={onSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="form-container">
            <h1>Sign up for Tour Drive!</h1>
            <div className="form-field-wrapper">
              <label className="form-label"> Username</label>
              <input
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="form-field-wrapper">
              <label className="form-label"> Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-field-wrapper">
              <label className="form-label"> Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <div className="form-field-wrapper">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="sign-up-button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
}

export default SignupFormPage