
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import 'react-datepicker/dist/react-datepicker.css'
import React, { useState } from "react";
import DateFetch from './DateFetch';







export default function BasicTable() {

  function createData(action, id, startDate, endDate, monthYear, DateExluded, noOfDays, leadCount, expectedDrr, lastUpdated) {
    return { action, id, startDate, endDate, monthYear, DateExluded, noOfDays, leadCount, expectedDrr, lastUpdated };
  }
  
  const [data, setData] = useState({
    action: "",
    id: "",
    startDate: Date.now(),
    endDate: Date.now(),
    monthYear: 3,
    DateExluded: '2023-10-08, 2023-10-15',
    noOfDays: 20,
    leadCount: 5,
    expectedDrr: 22,
    lastUpdated: '2023-10-25 13:30:41'
  })
  
  const [rows, setRows] = useState([
    createData('', 11, '2023-10-03', '2023-10-25', 10, '2023-10-08, 2023-10-15', 20, 8000, 400, '2023-10-25 13:30:41'),
    createData('', 10, '2023-10-03', '2023-10-25', 10, '2023-10-08, 2023-10-15', 20, 500, 25, '2023-10-25 13:30:41'),
    createData('', 9, '2023-10-03', '2023-10-25', 10, '2023-10-08, 2023-10-15', 20, 500, 25, '2023-10-25 13:30:41'),
    createData('', 8, '2023-10-03', '2023-10-25', 10, '2023-10-08, 2023-10-15', 20, 1000, 50, '2023-10-25 13:30:41'),
    createData('', 6, '2023-10-03', '2023-10-25', 10, '2023-10-08, 2023-10-15', 20, 8000, 490, '2023-10-25 13:30:41'),
  ])


  const submitHandler = () =>{
    setRows([...rows,createData(data.action,data.id,data.startDate,data.endDate,data.monthYear,data.DateExluded,data.noOfDays,data.leadCount,data.expectedDrr,data.lastUpdated)])
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">End Date</TableCell>
            <TableCell align="center">Month, Year</TableCell>
            <TableCell align="center">Dates Excluded</TableCell>
            <TableCell align="center">Number of Days</TableCell>
            <TableCell align="center">lead Count</TableCell>
            <TableCell align="center">Expected DRR</TableCell>
            <TableCell align="center">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              N/A
            </TableCell>
            <TableCell align="center">N/A</TableCell>
            <TableCell align="center"><DateFetch val = "startDate" data = {data} setData = {setData}/></TableCell>
            <TableCell align="center"><DateFetch  val = "endDate" data = {data} setData = {setData} /></TableCell>
            <TableCell align="center">10</TableCell>
            <TableCell align="center"><DateFetch  val = "DateExluded" data = {data} setData = {setData}/></TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center"><input type='text' placeholder='0' style={{ width: '15px' }} onChange={(e)=>setData({...data,leadCount : e.target.value})}/></TableCell>
            <TableCell align="center"><input type='text' placeholder='0' style={{ width: '35px' }} onChange={(e)=>setData({...data,expectedDrr : e.target.value})} /></TableCell>
            <TableCell align="center" style={{ display: "flex", flexDirection: "column" }}><Button variant="contained" style={{ width: '2rem', margin: '2px auto' }} onClick={submitHandler} >Save</Button><Button variant="contained" style={{ width: '2rem', margin: '2px auto' }}>Cancel</Button></TableCell>
          </TableRow>
          {rows && rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.action}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.startDate}</TableCell>
              <TableCell align="center">{row.endDate}</TableCell>
              <TableCell align="center">{row.monthYear}</TableCell>
              <TableCell align="center">{row.DateExluded}</TableCell>
              <TableCell align="center">{row.noOfDays}</TableCell>
              <TableCell align="center">{row.leadCount}</TableCell>
              <TableCell align="center">{row.expectedDrr}</TableCell>
              <TableCell align="center">{row.lastUpdated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}