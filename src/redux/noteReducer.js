const ADD_NOTE = 'ADD_NOTE'

let initialState = {
    noteData: [
        {id: 1, note: "Запись первая"}
    ]
}

let noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            let note = action.newNote
            return {
                ...state,
                noteData: [...state.noteData, { id: 2, note }]
            }
        default:
            return state
    }
}

export const addNote = (newNote) => ({ type: ADD_NOTE, newNote })

export default noteReducer