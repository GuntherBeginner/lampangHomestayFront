import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers";

export default function BookingAdd() {
    const dateFormat = 'YYYY-MM-DD'
    const URL = 'https://odd-handbag-jay.cyclic.app'
    const { B_id } = useParams();

    const [state, setState] = useState({
        fname: "",
        lname: "",
        phone: "",
        room: "",
        people: 0,
        D_from: null,
        D_to: null,
        airport: 0,
        breakfast: 0,
        rental: 0,
        trip: 0,
        status: 0
    });     

    useEffect(() => {
        const check = localStorage.getItem("username");

        if (check) {
            window.location.href = '/customer';
            return;
        }
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            ...state
        }
        fetch(URL + '/addBooking', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    alert('Add New Booking Success!!')
                    window.location.href = '/customer';
                }
            )
    }

    return (
        <Container sx={{ p: 2 }} maxWidth="sm">
            <div>
                <Typography component="h1" variant="h5">
                    Request Booking                    
                </Typography>                
                <form onSubmit={handleSubmit}>
                    <Grid container sx={{ pt: 2 }} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={state.fname}
                                onChange={(e) => setState((prev) => ({ ...prev, fname: e.target.value }))}
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={state.lname}
                                onChange={(e) => setState((prev) => ({ ...prev, lname: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                                value={state.phone}
                                onChange={(e) => setState((prev) => ({ ...prev, phone: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="room"
                                label="Room"
                                value={state.room}
                                onChange={(e) => setState((prev) => ({ ...prev, room: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="people"
                                label="People"
                                value={state.people}
                                onChange={(e) => setState((prev) => ({ ...prev, people: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <DatePicker
                                label="From"
                                value={dayjs(state.D_from)}
                                onChange={(newValue) => setState((prev) => ({ ...prev, D_from: dayjs(newValue).format(dateFormat) }))}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <DatePicker
                                label="To"
                                value={dayjs(state.D_to)}
                                onChange={(newValue) => setState((prev) => ({ ...prev, D_to: dayjs(newValue).format(dateFormat) }))}
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="airport"
                                label="Airport"
                                value={state.airport}
                                onChange={(e) => setState((prev) => ({ ...prev, airport: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="breakfast"
                                label="Breakfast"
                                value={state.breakfast}
                                onChange={(e) => setState((prev) => ({ ...prev, breakfast: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}> 
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="rental"
                                label="Rental Car"
                                value={state.rental}
                                onChange={(e) => setState((prev) => ({ ...prev, rental: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="trip"
                                label="Trip"
                                value={state.trip}
                                onChange={(e) => setState((prev) => ({ ...prev, trip: e.target.value }))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                        
                    </Grid>
                </form>
            </div>
        </Container>
    );
}