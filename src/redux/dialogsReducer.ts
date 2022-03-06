const ADD_MESSAGE = "ADD_MESSAGE";

type NameType = {
  id: number,
  name: string,
}

type MessageType = {
  id: number,
  message: string,
}

let initialState = {
  nameData: [
    { id: 1, name: "oleg" },
    { id: 2, name: "sereja" },
    { id: 3, name: "kolya" },
    { id: 4, name: "lesha" },
    { id: 5, name: "dima" },
  ] as Array<NameType>,
  messageData: [
    { id: 1, message: "Hola" },
    { id: 2, message: "Que tal?" },
    {
      id: 3,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam numquam, quaerat eos reiciendis qui laudantium nihil? Cupiditate voluptatem ex, aliquam dolores accusamus, amet, sint commodi fuga consequuntur ad officiis eum.",
    },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

let dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messageData: [...state.messageData, { id: 4, message: body }]
      };
    default:
      return state;
  }
};

export type AddMessageActionType = {
  type: typeof ADD_MESSAGE,
  newMessageBody: string
}

export const addMessage = (newMessageBody: string): AddMessageActionType => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;
