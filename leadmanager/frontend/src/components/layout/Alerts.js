import React, { useEffect } from "react"
import { useAlert } from "react-alert"
import { useSelector, useDispatch } from "react-redux"

const Alerts = () => {
  const alert = useAlert()
  const messagesObject = useSelector(state => state.messages)

  useEffect(()=>{
    if(messagesObject.status){
      if(messagesObject.message.name)
        alert.error(`Name: ${messagesObject.message.name.join()}`)
      if(messagesObject.message.email)
        alert.error(`Email: ${messagesObject.message.email.join()}`)
      if(messagesObject.message.message)
        alert.error(`Email: ${messagesObject.message.message.join()}`)
      if(messagesObject.message.detail)
        alert.error(messagesObject.message.detail)
      if(messagesObject.message.deleteSuccess)
        alert.success(messagesObject.message.deleteSuccess)
      if(messagesObject.message.addSuccess)
        alert.success(messagesObject.message.addSuccess)
      if(messagesObject.message.non_field_errors)
        alert.error(messagesObject.message.non_field_errors.join())
      if(messagesObject.message.passwordMismatch)
        alert.error(messagesObject.message.passwordMismatch)
      if(messagesObject.message.blankField)
        alert.error(messagesObject.message.blankField)
      if(messagesObject.message.username)
        alert.error(`Name: ${messagesObject.message.username.join()}`)
    }
  })  

  return (
    <div>

    </div>
  )
}

export default Alerts