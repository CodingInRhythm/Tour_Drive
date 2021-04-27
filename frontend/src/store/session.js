import { csrfFetch } from './csrf'

const SET_USER = 'users/SET_USER'
const REMOVE_USER = 'users/REMOVE_USER'

const setUser = user => ({
        type: SET_USER,
        user,
    })
const removeUser = () => ({
    type: REMOVE_USER
})

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({credential, password}),
    });
    const data = await res.json()
    dispatch(setUser(data.user))
    return res
}

export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session')
    const data = await res.json()
    
    dispatch(setUser(data.user))
    return res
}

export const signup = (userObj) => async (dispatch) => {
    const { email, password, username, image } = userObj
    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (image) formData.append("image", image);
    
    const res = await csrfFetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    const data = await res.json()
    dispatch(setUser(data.user))
    return res
}

export const logout = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
    dispatch(removeUser())
    return res
}

const initialstate = {
    user: null
}

const sessionReducer = (state = initialstate, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state)
            newState.user = action.user 
            return newState
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState
        default:
            return state
    }
}

export default sessionReducer