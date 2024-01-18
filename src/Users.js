import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';


export default function Users() {

  const [data,setData]=useState([]);
  const [mode , setMode]=useState('online');

  useEffect(()=>{
    let url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then((res) => { 
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`); 
        }
        return res.json();
      })
      .then((result) => {
        console.warn("result", result);
        setData(result);
        localStorage.setItem("userdata",JSON.stringify(result));
        console.log("data",data);
      })
      .catch((error) => {
        // alert("catch block");
        let collection = localStorage.getItem("userdata");
        setData(JSON.parse(collection));
        setMode("offline");
      });
    

  },[])

  return (
    <div>
      <div>
        {
          mode==='offline'?<div className='alert alert-warning' role='alert'>you are in offline mode or some issue with connection</div>:null
        }
      </div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>
           ( <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.id}</td>
          </tr>)
          )
        }
 
      </tbody>
    </Table>
    </div>
  )
}
