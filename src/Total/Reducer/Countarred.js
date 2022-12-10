const initialState = {}

export default (state = 0, { type, payload }) => {
  switch (type) {

  case "Increment":
    return  state +1;

    case "Decrementn":
    return  state -1;

    case "Modual":
    return  state *2;

  default:
    return state
  }
}
