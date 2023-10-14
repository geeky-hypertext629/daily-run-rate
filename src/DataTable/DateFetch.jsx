import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './Date.css';


const yesterday = dayjs().subtract(1, 'day');


export default function DateFetch({setData,val,data}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            defaultValue={yesterday}
            views={['year', 'month', 'day']}
            sx={{ boxSizing :'border-box', maxWidth : '150px'}}
            onChange={(e)=>{
            setData({...data,val : e.target.value});
            }}
          />
    </LocalizationProvider>
  );
}