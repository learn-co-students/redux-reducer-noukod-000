export function manageFriends(state, action){
    switch(action.type) {
      case "ADD_FRIEND":
        return {
          friends: [...state.friends, action.friend]
        }
        
      case 'REMOVE_FRIEND':
        let removeFriendId = action.id
        let removeFriend = state.friends.filter(function(rm){return rm.id !== removeFriendId})
        return {friends: removeFriend}
         default:
           return state;
          
    }
  }