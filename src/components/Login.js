import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';

function Login() {
    return (
        <Box
            sx={{bgColor: "rgb(243, 243, 243)"}}
        >
            <Box
                sx={{display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "rgb(300, 300, 300)", minHeight: "100vh"}}
            >
                <Typography variant="h4" color="rgb(90, 90, 90)">Retro Rewind POS</Typography>
                <Box
                    sx={{p:3, marginTop: "20px", bgcolor: "white"}}
                >
                    <FormControl>
                        <Stack direction="column" spacing={2}>
                            <TextField sx={{minWidth: 300, maxWidth: 300}} size="small" label="Email Address" />
                            <TextField sx={{minWidth: 300, maxWidth: 300}} size="small" label="Password" type="password"/>
                            <Button variant="contained" size="large" sx={{textTransform: "none", marginRight: '40px', maxHeight: '50px'}}>Login</Button>
                            <Typography variant="p1" color="rgb(90, 90, 90)">Forgot Password</Typography>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;