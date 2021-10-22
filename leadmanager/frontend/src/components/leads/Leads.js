import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { deleteLead } from "../../reducers/leadsReducer"
import { getLeads } from "../../reducers/leadsReducer"

const Leads = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLeads());
  }, [dispatch]);
  
  const leads = useSelector(state => state.leads.leads)
  
  
  const handleDelete = (id) => {
    if(window.confirm(`Do you want to delete lead number ${id}?`))
      dispatch(deleteLead(id))
  }

  return (
    <div>

      <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick = {() => handleDelete(lead.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
    </div>
  )
}

export default Leads 