<<<<<<< HEAD
export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state;
  }
=======
export function managePresents(text){
  const action = {
    type: "INCREASE",
    text
>>>>>>> d34373b29171871aabee1522cc794e94d9849d4f
}
