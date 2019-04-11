export function manageFriends(state, action){
   switch(action.type) {
    case 'ADD_FRIEND':
      return {...state,
        friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}]
      };

case 'REMOVE_FRIEND':
      const removeIndex = state.friends.findIndex(friend => friend.id === action.id);
      return {
        ...state,
        friends: [...state.friends.slice(0, removeIndex), ...state.friends.slice(removeIndex + 1)]
      };

    default:
      return state;
  }
}
