const initialState = {

    data: [],
    isLoadding : false,
    error: {} 
   
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FETCH_POSTS_SUCCESS':
    return { ...state, isLoadding: false, data :payload}

    case 'FETCH_POSTS_ERROR':
        return { ...state, isLoadding: false, Error:payload}

    case 'FETCH_POSTS_REOUEST':
        return { ...state, isLoadding: true}
    

  default:
    return state
  }
}
