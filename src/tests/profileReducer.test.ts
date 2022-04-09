import profileReducer, { actions } from './../redux/profileReducer'

let state = {
  myPost: [
    {
      id: 1,
      message: "Hi! How are you?",
    },
    {
      id: 2,
      message: "Todo esta bien!!!",
    },
    {
      id: 3,
      message: "Lorem, ipsum",
    },
  ],
  profile: null,
  status: '',
}

test('Количество постов', () => {
    // test data
    let action = actions.addPost("Новый пост")

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.myPost.length).toBe(4)
})
  
test('Инициализация поста', () => {
    // test data
    let action = actions.addPost("Новый пост")

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.myPost[3].message).toBe("Новый пост")
})
  
  
test('Удаление поста', () => {
    // test data
    let action = actions.deletePost(1)

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.myPost.length).toBe(2)
  })