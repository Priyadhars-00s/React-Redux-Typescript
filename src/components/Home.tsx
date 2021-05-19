

import { Redirect } from "react-router-dom";

import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react';

export const APIForm: React.FC = () => {
  const [employees, setEmployees] = useState([])
  const [Test, setTest] = useState([])


  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  useEffect(() => {
    const apiUrl = `http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2`;
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("data",data.data)
    const Test= data.data
    console.log("Test",Test)
    // setEmployees(data.data)
  });
  });


  return (

    <div>

     <TableContainer component={Paper}>
       {/* <Button onClick={()=>{this.setState({logout: true})}}>logout</Button> */}
   <Table >
   <TableHead>
         <TableRow>
            <TableCell style={{ width: 160 }} align="center" >
              ID
             </TableCell>
             <TableCell style={{ width: 160 }} align="center" >
              EMPLOYEE NAME
             </TableCell>
             <TableCell style={{ width: 160 }} align="center" >
              EMPLOYEE AGE
             </TableCell>
             <TableCell style={{ width: 160 }} align="center" >
              EMPLOYEE SALARY
             </TableCell>
           </TableRow>
       </TableHead>
    <TableBody>
   {/* { Test.map((data) => ( */}
          <TableRow key={Test.id}>
          <TableCell style={{ width: 160 }} align="center">
            {Test.id}
          </TableCell>
          <TableCell >
            {Test.employee_name}
          </TableCell>
          <TableCell style={{ width: 160 }} align="center">
            {Test.employee_age}
          </TableCell>
          <TableCell style={{ width: 160 }} align="center">
            {Test.employee_salary}
          </TableCell>
        </TableRow> 
       </TableBody> 
 
         </Table>
</TableContainer>
</div>
);
}

// const mapStateToProps = (state) => 

// ({
//   user: state.user.user,
  
// });

// const mapDispatchToProps = {
//   login,
//   logout,
// };
// console.log("Inside mapDispatchToProps=====>",login)
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
