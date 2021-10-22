import axios from "axios"

const initialState = {
  leads: [],
}

const leadsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'GET_LEADS':      
      return  {
        ...state,
        leads: action.data
      }
    case 'DELETE_LEAD':
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.data)
      }
    case 'ADD_LEAD':
      return {
        ...state,
        leads: [...state.leads, action.data]
      }
    default:
      return state
  }
}

const configHeader = (withToken = false) => {  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  if(withToken){
    const token = localStorage.getItem('token')
    if(token){
      config.headers['Authorization'] = `Token ${token}`    
    }
  }
  return config 
}

export const getLeads = () =>  dispatch => {
  const config = configHeader(true)
  axios
    .get('/api/leads/', config)
    .then(response => {
      dispatch({
        type: 'CLEAR_MESSAGES'
      })
      dispatch({
        type: 'GET_LEADS',
        data: response.data
      })
    })
    .catch(error => {
      const errorsObject = {
        message: error.response.data,
        status: error.response.status
      }
      dispatch({
        type: 'CLEAR_MESSAGES'
      })
      dispatch({
        type: 'CREATE_MESSAGE',
        data: errorsObject
      }) 
    })
}

export const deleteLead = (id) =>  dispatch => {
  const config = configHeader(true)
  axios
    .delete(`/api/leads/${id}/`, config)
    .then(response => {
      const messagesObject = {
        message:{
          deleteSuccess:'Deleted Lead Successfully'
        },
        status: response.status
      }
      dispatch({
        type: 'CLEAR_MESSAGES'
      })
      dispatch({
        type: 'CREATE_MESSAGE',
        data: messagesObject
      })      
      dispatch({
        type: 'DELETE_LEAD',
        data: id
      })
    })
    .catch(error => console.log(error))
}

export const addLead = (leadObject) =>  dispatch => {  
  const config = configHeader(true)
  axios
    .post('/api/leads/', leadObject, config)
    .then(response => {
      const messagesObject = {
        message:{
          addSuccess:'Added New Lead Successfully'
        },
        status: response.status
      }
      dispatch({
        type: 'CLEAR_MESSAGES'
      })
      dispatch({
        type: 'CREATE_MESSAGE',
        data: messagesObject
      })

      dispatch({
        type: 'ADD_LEAD',
        data: response.data
      })
    })
    .catch(error => {
      const errorsObject = {
        message: error.response.data,
        status: error.response.status
      }
      dispatch({
        type: 'CLEAR_MESSAGES'
      })
      dispatch({
        type: 'CREATE_MESSAGE',
        data: errorsObject
      })
    })
}

export default leadsReducer