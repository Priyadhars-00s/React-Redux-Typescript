
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react';
import { TablePagination } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button'
import SelectSearch from 'react-select-search';
import { DataGrid } from '@material-ui/data-grid';
import Pagination from './Pagination'

// import { useDispatch, useSelector } from "react-redux";
// import { DataMainType } from "../components/Redux/Stores";
import axios from "axios";
import {
  DATA_FETCH_FAILED,
  DATA_FETCH_LOADING,
  DATA_FETCH_SUCCESS,
} from "../components/Redux/Action";

interface IUser {
  name: [];
}
const useStyles = makeStyles({
  table: {
    minWidth: 300,
    },
    filterInput:{
       width: 16,
      height: 16,
      backgroundColor: 'transparent',
      borderRadius: 2,
    },
});




export const APIForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({name: []});
  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = [ (e:any) => {
    const value = e.target.value || undefined;
        setFilterInput(value); 
    console.log("handlefilterchange", value) 
  }];




  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
  // const dispatch = useDispatch();
  // const MainData = useSelector((state: DataMainType) => state.Data);

 
  // const handleChangePage = (event:any, newPage:any) => {
  //   setPage(newPage);
  //   console.log("handleChangePage====>",newPage)

  // };

  // const handleChangeRowsPerPage = (event:any) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  //   console.log("handleChangeRowsPerPage====>",event.target.value)
  // };

  let history = useHistory();
  const signIn = () => {
    console.log('inside the method')
    history.push('/')
  };
useEffect(() => {

    fetch('http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2')
    .then(response => response.json())
    .then(data => 
      setUser({name: data.data})
      );
  }, [])


  
// useEffect((): void => {
//   dispatch({
//     type: DATA_FETCH_LOADING,
//   });
//   axios("http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2")
//     .then((res) => {
//       dispatch({
//         type: DATA_FETCH_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: DATA_FETCH_FAILED,
//         payload: err.message,
//       });
//     });
//   }, []);

const classes = useStyles();
return (
    <div>
      {/* <input 
      style={{ width: 160, background: "Pink", alignContent:"right"}}
  value={filterInput}
  onChange={handleFilterChange}
  placeholder={"Search name"}
/> */}
   
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 160 , background:"Grey"}} align="center" >EMPLOYEE ID</TableCell>
            <TableCell style={{ width: 160 , background:"Grey"}} align="center">EMPLOYEE NAME</TableCell>
            <TableCell style={{ width: 160 , background:"Grey"}} align="center">EMPLOYEE AGE</TableCell>
            <TableCell style={{ width: 160 , background:"Grey"}} align="center">EMPLOYEE SALARY</TableCell>
            </TableRow>
        </TableHead>
<TableBody>
          {user.name.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">{row.employee_name}</TableCell>
              <TableCell style={{ width: 160 }} align="center">{row.employee_salary}</TableCell>
              <TableCell style={{ width: 160 }} align="center">{row.employee_age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
         {/* <DataGrid autoPageSize pagination {...data} />  */}
         <Pagination
         paginate={paginate}
      />
      
       
      </Table>
      </TableContainer>
      <Button
          type="submit"
         variant="contained"
         onClick={signIn}
         color="primary">
            Logout
          </Button>
   
     </div>
 
   )
 }




