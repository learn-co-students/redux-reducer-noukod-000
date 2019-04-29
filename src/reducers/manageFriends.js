export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: [...state.friends, action.friend]
      }
    case 'REMOVE_FRIEND':
      const removedFriend = state.friends.findIndex(friend => friend.id === action.id)
      return {
        ...state,
        friends: [...state.friends.slice(0, removedFriend), //captures first part of array up to removedFriend
        ...state.friends.slice(removedFriend + 1)] //captures rest of state.friends array after removedFriend index
      }
    default:
      return state;
  }
}
