import profileReducer, { addPost, deletePost } from './profileReducer'

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
}

test('Количество постов', () => {
    // test data
    let action = addPost("Новый пост")

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.myPost.length).toBe(4)
})
  
test('Инициализация поста', () => {
    // test data
    let action = addPost("Новый пост")

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.myPost[3].message).toBe("Новый пост")
})
  
  
test('Удаление поста', () => {
    // test data
    let action = deletePost(1)

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.myPost.length).toBe(2)
  })