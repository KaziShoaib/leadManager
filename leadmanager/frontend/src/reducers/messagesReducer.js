const initialState = {
  message: {},
  status: null
}

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_MESSAGE':
      return {
        message: action.data.message,
        status: action.data.status
      }
    case 'CLEAR_MESSAGES':
      return initialState
    default:
      return state      
  }
}

export default messagesReducer