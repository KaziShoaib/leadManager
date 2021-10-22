import React from "react"
import { useDispatch } from "react-redux"

import { addLead } from "../../reducers/leadsReducer"
import { useField } from "../../hooks"

const Form = () => {
  const { field: name, reset: resetName} = useField('text')
  const { field: email, reset: resetEmail} = useField('text')
  const { field: message, reset: resetMessage} = useField('text')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const leadObject = {name: name.value, email:email.value, message:message.value}
    dispatch(addLead(leadObject))
    resetName()
    resetEmail()
    resetMessage()
  }

  return (
    <div className='card card-body mt-4 mb-4'>
      <h2>Add Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input className="form-control" {...name} />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input className="form-control" {...email} />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea className="form-control" {...message}>
            
          </textarea>
        </div>
        <div className='form-group mt-3'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>          
        </div>
      </form>
    </div>
  )
}


export default Form 