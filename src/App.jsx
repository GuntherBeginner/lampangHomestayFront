import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import SignIn from './SignIn'
import CustomerMenu from './CustomerMenu'
import CustomerAdd from './CustomerAdd'
import Bookings from './Bookings'
import BookingUpdate from './BookingUpdate'
import BookingAdd from "./BookingAdd";

export default function App() {

  const [logincheck, setLogincheck] = useState(false);

  useEffect(() => {
    const check = localStorage.getItem("username");
    setLogincheck(!!check)
  }, [])


  return (
    <div>
      {logincheck && <Navbar />}
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/customer' element={<CustomerMenu />} />        
        <Route path='/customer/add' element={<CustomerAdd />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/booking/update/:B_id' element={<BookingUpdate />} />
        <Route path='/booking/add' element={<BookingAdd />} />
      </Routes>
    </div>
  );
}