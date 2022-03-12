const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
  messageData: [
    { id: 1, message: "Hola" },
    { id: 2, message: "Que tal?" },
    { id: 3, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
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
