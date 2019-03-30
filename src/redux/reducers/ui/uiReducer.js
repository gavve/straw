import { TOGGLE_MODAL } from '../../actionTypes';

let initialState = {
  modalOpen: false
}


const uiReducer = (state=initialState, action) => {

  switch(action.type) {

    case TOGGLE_MODAL:
      return Object.assign({
        modalOpen: !state.modalOpen
      })

    default:
      return state

  }
}

export default uiReducer