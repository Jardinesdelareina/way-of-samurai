const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
  messageData: [
    { id: 1, message: "Hola" },
    { id: 2, message: "Que tal?" },
    { id: 3, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima a sapiente placeat laboriosam. Nam magni laborum vitae voluptates, distinctio reiciendis aspernatur ipsa excepturi repellendus, dicta culpa velit minus sit." }
  ],
}

let messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messageData: [...state.messageData, { id: 4, message: body }]
      }
    default:
      return state
  }
}

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default messagesReducer
