const initialState = {}

export default (state = 0, { type, payload }) => {
  switch (type) {

  case "Increment":
    return  state +1;

    case "Decrementn":
    return  state -1;

     case "modual":
      return  state *5;

    case "MInuscount":
    return state - payload;

  default:
    return state
  }
}

