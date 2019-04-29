
export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state;
  }

export function managePresents(text){
  const action = {
    type: "INCREASE",
    text
}
