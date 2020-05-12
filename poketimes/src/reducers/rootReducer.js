const initState = {
  posts: [
    {id: '1', title: 'Squirtle Laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur harum adipisci soluta aliquid! Natus molestiae porro ea quia laudantium in dolores necessitatibus, eveniet illum quam quibusdam sint? Vel, ipsa!'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur harum adipisci soluta aliquid! Natus molestiae porro ea quia laudantium in dolores necessitatibus, eveniet illum quam quibusdam sint? Vel, ipsa!'},
    {id: '3', title: 'a Helix fossile was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur harum adipisci soluta aliquid! Natus molestiae porro ea quia laudantium in dolores necessitatibus, eveniet illum quam quibusdam sint? Vel, ipsa!'},

  ]
}


const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}


export default rootReducer