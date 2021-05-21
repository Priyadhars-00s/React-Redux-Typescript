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
import { DataGrid } from '@material-ui/data-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "material-ui-search-bar";
import { useDispatch, useSelector } from "react-redux";
// import {Pagination} from 'baseui/pagination';
import { DataMainType } from "../components/Redux/Stores";
import axios from "axios";

// import {
//   FilterDrawer,
//   filterSelectors,
//   filterActions
// } from "material-ui-filter";

import {
  DATA_FETCH_FAILED,
  DATA_FETCH_LOADING,
  DATA_FETCH_SUCCESS,
} from "../components/Redux/Action";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  table: {
    minWidth: 300,
    },
    filterInput:{
       width: 16,
      height: 16,
      backgroundColor: 'transparent',
      borderRadius: 2,
    },
}));
// MainData && MainData.data &&
// MainData.data.data &&   
// MainData.data.data

export const APIForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const MainData = useSelector((state: DataMainType) => state.Data);
const [rows, setRows] = useState([]);

const [searched, setSearched] = useState<string>("");
console.log("row", MainData && MainData.data && MainData.data.data);
const requestSearch = (searchedVal: string) => {
  console.log("requestSearch");
  const filteredRows = MainData && MainData.data &&
  MainData.data.data &&   
  MainData.data.data.filter((data:any) => {
    console.log("data",data);
    return data.employee_name.toLowerCase().includes(searchedVal.toLowerCase());
  });
  setRows(filteredRows);
  console.log("Filteredrows",filteredRows)
};

const cancelSearch = () => {
  console.log("cancelSearch");
  setSearched("");
  requestSearch(searched);
  console.log("searched",searched);
};
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log("page",newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    console.log("rowsperpage",+event.target.value);
    setPage(0);
  };
 
 let history = useHistory();
  const signIn = () => {
    console.log('inside the method')
    history.push('/')
  };

console.log("check",MainData)


useEffect((): void => {
  const test = MainData && MainData.data && MainData.data.data
  console.log("test", test)
  setRows(test);
 console.log("rows",rows)
    }, []);



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
  <div className={classes.root}>
      
  <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant="h6" noWrap>
        Material-UI
      </Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
             </div>
    </Toolbar>
  </AppBar>
  <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
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
          {
         rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((datas: any) => (
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
               
      </Table>
      </TableContainer>
      <Button
          type="submit"
         variant="contained"
         onClick={signIn}
         color="primary">
            Logout
          </Button>
          <TablePagination
        rowsPerPageOptions={[5, 10, { label: "All", value: rows.length }]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
        
     </div>
 
   )
 }


// export default React.memo(APIForm);


