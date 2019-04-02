export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const friendIdenx = state.friends.findIndex(friend => friend.id === action.id);
            let newState = [...state.friends]
            newState.splice(friendIdenx, 1)
            return {friends: newState}
        default:
            return state
    }
}
