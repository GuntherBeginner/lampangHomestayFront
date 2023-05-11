import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


ReactDOM.createRoot(document.getElementById('root')).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </LocalizationProvider>
)
document.body.style.backgroundImage = "url('https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03012739_pic1.jpg')";