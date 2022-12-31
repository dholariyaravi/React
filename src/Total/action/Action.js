export const Increment = (payload) => ({
    type:'Increment', 
    payload
}) 

export const Decrementn = (payload) => ({
    type:'Decrementn', 
    payload
}) 


export const getUserListStarted = () => ({
    type:'Started',

  })

  export const getUserListSuccess = (payload) => ({
    type:'GET_USER_SUC',
    payload
  })

  export const getUserListFailure = (payload) => ({
    type:'GET_USER_FAILED',
    payload
  })
  
  

  export const AsncMinus = num => {
    return dispatch => {
        setTimeout( () => {
            dispatch ({
                type:'MInuscount', 
                payload : num 
            })
        } ,1000);

    }
  }

  export const getUserlist = (page=1) => async dispatch => {
      dispatch(getUserListStarted());

      try{
        const res = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data =await res.json();
        dispatch(getUserListSuccess(data));
      }catch(err) {
        dispatch(getUserListFailure(err.message));
      }
  }



