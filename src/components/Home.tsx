
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { TablePagination } from '@material-ui/core';
interface IUser {
  name: [];
}
const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});


export const APIForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({name: []});
  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = (e:any) => {
    const value = e.target.value || undefined;
    
    setFilterInput(value);  
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event:any, newPage:any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event:any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

useEffect(() => {

    fetch('http://www.json-generator.com/api/json/get/bOUcubzASW?indent=2')
    .then(response => response.json())
    .then(data => 
      setUser({name: data.data})
      );
  }, [])

 
const classes = useStyles();
return (
    <div>
      <input
  value={filterInput}
  onChange={handleFilterChange}
  placeholder={"Search name"}
/>

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Id</TableCell>
            <TableCell align="right">Employee Name</TableCell>
            <TableCell align="right">Employee Salary</TableCell>
            <TableCell align="right">Employee Age</TableCell>
          </TableRow>
        </TableHead>
<TableBody>
          {user.name.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.employee_name}</TableCell>
              <TableCell align="right">{row.employee_salary}</TableCell>
              <TableCell align="right">{row.employee_age}</TableCell>
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
        <TablePagination
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




