import { useState, useEffect } from "react";
import axios from "axios";


const RealData=()=>{
   const [mydata, setMyData]=useState([]);
   const loadData=()=>{
    let url="http://34.198.81.140/attendance.json";
    axios.get(url).then((res)=>{
        setMyData(res.data);
    });
   }

   useEffect(()=>{
        loadData();
   },[]);

   const myans = mydata.map((key)=>{
   return(
    <>
    <tr align="center">
        <td>{key.emp_id}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.basic_salary}</td>
    </tr>
    </>
   )
   });
    return(
        <>
        <h1 align="center">EMPLOYEE DATA</h1>
        <table border="1" width="800" align="center">
            <tr align="center">
                <th>Emp ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            {myans}
        </table>
        </>
    );
}
export default RealData;

