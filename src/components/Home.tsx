
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import React, { useEffect, useState } from 'react';
interface IUser {
  name: [];
}
const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});
export const APIForm: React.FC = () => {
  const [employees, setEmployees] = useState([])
  const [Test, setTest] = useState([])
  const [user, setUser] = useState<IUser>({name: []});
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
      </Table>
      </TableContainer>
     
     </div>
 
   )
 }




