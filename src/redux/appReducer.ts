import { getAuthUserData } from './authReducer'
import { InferActionsTypes } from './reduxStore'

const SET_INIT = 'SET_INIT'

let initialState = {
  init: false,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_INIT:
      return {
          ...state,
          init: true
      }
    default:
      return state
  }
}

export const actions = {
  setInit: () => ({ type: SET_INIT } as const)
}

export const initApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => { dispatch(actions.setInit()) })
}

export default appReducer