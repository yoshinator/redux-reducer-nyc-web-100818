export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      return { friends: state.friends.filter(friend => friend.id !== action.id)}
    default: 
      return state
  }
}

// it("removes the friend when action type is 'REMOVE_FRIEND' and the action has a property of the friends id to be removed", () => {
//   let state = {
//     friends: [
//       {
//         name: 'Avi',
//         hometown: 'NYC',
//         id: 100
//       },
//       {
//         name: 'Joe',
//         hometown: 'Boston',
//         id: 101
//       },
//       {
//         name: 'Steven',
//         hometown: 'Philadephia',
//         id: 102
//       }
//     ]
//   };

//   expect(manageFriends(state, {
//     type: "REMOVE_FRIEND",
//     id: 101
//   })).toEqual({
//     friends: [
//       {
//         name: 'Avi',
//         hometown: 'NYC',
//         id: 100
//       },
//       {
//         name: 'Steven',
//         hometown: 'Philadephia',
//         id: 102
//       }
//     ]
//   });
// });
