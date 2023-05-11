import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Manage Booking
                    </Typography>
                    <Button                        
                        type="button"
                        variant="contained"
                        sx={{ mt: 3, mb: 4 }}
                        onClick={() => {
                            localStorage.removeItem("username");
                            window.location.href = '/';
                        }}
                    >
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}