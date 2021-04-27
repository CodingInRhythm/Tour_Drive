const SET_ALBUM = 'albums/SET_ALBUM'

export const setAlbum = album => ({
    type: SET_ALBUM,
    album
})

//need to make api for getting song


export const getAlbum = (id) => async(dispatch) => {
    const res = await fetch(`/api/albums/${id}`)
    const data = await res.json()
    dispatch(setAlbum(data))
    return data
}

const initialstate = {
    album: null
}
const albumReducer = (state = initialstate, action) =>{
    let newState;
    switch (action.type) {
        case SET_ALBUM:
            newState = Object.assign({}, state)
            newState.album= action.album
            return newState
        default:
            return state
    }
}

export default albumReducer