
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
import { useDispatch, useSelector } from "react-redux";
import { DataMainType } from "../components/Redux/Stores";
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
  const handleFilterChange = (e:any) => {
    const value = e.target.value || undefined;
        setFilterInput(value); 
    console.log("handlefilterchange", value) 
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const dispatch = useDispatch();
  const MainData = useSelector((state: DataMainType) => state.Data);


  const handleChangePage = (event:any, newPage:any) => {
    setPage(newPage);
    console.log("handleChangePage====>",newPage)

  };

  const handleChangeRowsPerPage = (event:any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    console.log("handleChangeRowsPerPage====>",event.target.value)
  };

// useEffect(() => {

//     fetch('http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2')
//     .then(response => response.json())
//     .then(data => 
//       setUser({name: data.data})
//       );
//   }, [])

useEffect((): void => {
  dispatch({
    type: DATA_FETCH_LOADING,
  });
  axios("http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2")
    .then((res) => {
      dispatch({
        type: DATA_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DATA_FETCH_FAILED,
        payload: err.message,
      });
    });
  }, []);

const classes = useStyles();
return (
    <div>
      <input 
      style={{ width: 160, background: "Pink", alignContent:"right"}}
  value={filterInput}
  onChange={handleFilterChange}
  placeholder={"Search name"}
/>

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
          {MainData.data.map((datas: any) => (
            <TableRow key={datas.name}>
              <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                {datas.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">{datas.employee_name}</TableCell>
              <TableCell style={{ width: 160 }} align="center">{datas.employee_salary}</TableCell>
              <TableCell style={{ width: 160 }} align="center">{datas.employee_age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <DataGrid
        sortingOrder={['desc', 'asc']}
        sortModel={[
          {
            field: 'employee_salary',
            sort: 'asc',
          },
        ]}
        {...user}
      /> */}
        <TablePagination style={{ width: 500 }} 
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={user.name.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
      </TableContainer>
   
     </div>
 
   )
 }




