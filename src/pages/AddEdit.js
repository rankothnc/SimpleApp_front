import React, { useState, useEffect } from 'react'
import { unstable_HistoryRouter, useLocation } from "react-router-dom";
import axios from 'axios';
import "./AddEdit.css";

//define initial state of the home component
const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {

  const [state, setState] = useState(initialState);

  const { name, email, contact } = initialState;

  const addContact = async (data) =>{
    const response = await axios.post("http://localhost:5000/user",data);
    if(response.status === 200){
      TransformStream.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(state);
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name] : value})
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
      
      onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name ..."
          onChange={handleInputChange}
          value={name}
        />

        <label htmlFor='email'>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email ..."
          onChange={handleInputChange}
          value={email}
        />

        <label htmlFor='contact'>Contact</label>
        <input
          type="number"
          id="number"
          placeholder="Enter Contact No ..."
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default AddEdit;