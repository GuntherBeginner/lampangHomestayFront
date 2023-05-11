import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import dayjs from 'dayjs';

export default function BookingsList() {

    const dateFormat = "YYYY-MM-DD"
    const URL = "https://odd-handbag-jay.cyclic.app"

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const check = localStorage.getItem("username");

        if (!check) {
            window.location.href = '/';
            return;
        }

        BookingsGet()
    }, [])

    const BookingsGet = () => {
        fetch(URL + "/bookings")
            .then(res => res.json())
            .then(
                (result) => {
                    setBookings(result)
                }
            )
    }

    const BookingUpdate = B_id => {
        window.location = '/booking/update/' + B_id
    }

    const BookingDelete = B_id => {
        if (confirm("remove Booking : " + B_id + " ?") == true) {
            var data = {
                'B_id': B_id
            }
        } else {
            alert('Cancle remover this booking : ' + B_id)
        }

        fetch(URL + '/delBooking', {
            method: 'DELETE',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    alert(result)
                    BookingsGet();
                }
            )
    }

    return (
        <Container sx={{ p: 2 }} maxWidth="lg">
            <Paper sx={{ p: 2 }}>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            BOOKINGS
                        </Typography>
                    </Box>
                    <Box>
                        <Link to="/booking/add">
                            <Button variant="contained" color="primary">
                                CREATE
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Book ID</TableCell>
                                <TableCell align="left">First</TableCell>
                                <TableCell align="left">Last</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Room</TableCell>
                                <TableCell align="center">People</TableCell>
                                <TableCell align="center">From</TableCell>
                                <TableCell align="center">To</TableCell>
                                <TableCell align="center">Airport</TableCell>
                                <TableCell align="center">Breakfast</TableCell>
                                <TableCell align="center">Rental Car</TableCell>
                                <TableCell align="center">Trip</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking) => (
                                <TableRow key={booking.B_id}>
                                    <TableCell align="right">{booking.B_id}</TableCell>
                                    <TableCell align="left">{booking.fname}</TableCell>
                                    <TableCell align="left">{booking.lname}</TableCell>
                                    <TableCell align="left">{booking.phone}</TableCell>
                                    <TableCell align="left">{booking.room}</TableCell>
                                    <TableCell align="center">{booking.people}</TableCell>
                                    <TableCell align="left">{dayjs(booking.D_from).format(dateFormat)}</TableCell>
                                    <TableCell align="left">{dayjs(booking.D_to).format(dateFormat)}</TableCell>
                                    <TableCell align="center">{booking.airport}</TableCell>
                                    <TableCell align="center">{booking.breakfast}</TableCell>
                                    <TableCell align="center">{booking.rental}</TableCell>
                                    <TableCell align="center">{booking.trip}</TableCell>
                                    <TableCell align="center">{booking.status}</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                                            <Button onClick={() => BookingUpdate(booking.B_id)}>Edit</Button>
                                            <Button onClick={() => BookingDelete(booking.B_id)}>Del</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}