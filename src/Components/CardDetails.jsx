import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"

const CardDetails = () => {
  const { id } = useParams()
  const { state } = useContext(ContextGlobal)
  const { data, loading } = state

  if (loading) {
    return <p>Loading...</p>
  }

  const dentist = data.find((item) => item.id === parseInt(id))

  if (!dentist) {
    return <p>Error: Dentist details not found.</p>
    
  }

  const { name, email, username, address, website } = dentist

  return (
    <div className="card">
      <h3>{name}</h3>
      <h3>ID: {id}</h3>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>Address: {address.street}, {address.city}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default CardDetails;
