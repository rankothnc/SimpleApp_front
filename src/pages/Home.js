import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Home.css";
//To make the API request
import axios from "axios";

const Home = () => {
  //Stroe all the data in the array
  const [data, setData] = useState([]);

  useEffect(()=>{
    //return all the users in the array
    getUsers();
  },[])

//define the method
//async
const getUsers=async()=>{
  const response = await axios.get("http://localhost:5000/users");
  if (response.status === 200) {
    setData(response.data);
  }
};

//to verify whether data is getting or not
  console.log("data=>", data);

  return (
    <div style={{marginTop: "150px"}}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{textAlign: "center"}}>No.</th>
              <th style={{textAlign: "center"}}>Name</th>
              <th style={{textAlign: "center"}}>Email</th>
              <th style={{textAlign: "center"}}>Contact</th>
              <th style={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index)=>{
              return(
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Home;