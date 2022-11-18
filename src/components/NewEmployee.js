import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function NewEmployee(){
    //drop down menu of Summary, Items, History, Transfer

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', flexDirection: 'column'}}
        >
            <Box
                component="div"
                sx={{display: 'flex', paddingTop: '30px'}}
            >
                <Box
                component="div"
                sx={{flexGrow: 1, display: 'flex'}}
                >
                    <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">New Employee</Typography>
                </Box>
                <Box
                    sx={{bgcolor: 'white', paddingTop: 1, marginRight: '10px'}}
                >
                    <Button variant="outlined" size="medium" component = {Link} to ="/Admin/Employees" startIcon={<ArrowBackIcon />} className="backToListBtn" sx={{textTransform: "none", paddingLeft: "10px", paddingRight: "10px"}}>Back to List</Button>
                </Box>
            </Box>
            <Box
                component="div"
                sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 3, paddingLeft: 2, paddingRight: 2}}
            >
                <Box
                    component="div"
                    sx={{bgcolor: 'white', p: 3}}
                >
                    <Stack direction="column">
                    <Stack direction="row" spacing={2}>
                        <Stack direction = "column" spacing={4}>
                            <Typography style={{display: 'inline-block'}} variant="h6" fontWeight="bold" color="gray" textAlign="left">Employee Info</Typography>
                            <Typography variant="p1" color="gray" textAlign="left">First Name</Typography>
                            <Typography variant="p1" color="gray" textAlign="left">Last Name</Typography>
                            <Typography variant="p1" color="gray" textAlign="left">Email Address</Typography>
                            <Typography variant="p1" color="gray" textAlign="left">Password</Typography>
                            <Typography variant="p1" color="gray" textAlign="left">Confirm Password</Typography>
                        </Stack>
                        <Stack direction = "column">
                            <Box
                                component="div"
                                sx = {{marginTop: '55px', minWidth: '170px', maxWidth: '170px'}}
                            >
                                <Stack direction = "column" spacing={2}>
                                    <TextField id="outlined-basic" variant="outlined" size="small"/>
                                    <TextField id="outlined-basic" variant="outlined" size="small"/>
                                    <TextField id="outlined-basic" variant="outlined" size="small"/>
                                    <TextField id="outlined-basic" variant="outlined" size="small"/>
                                    <TextField id="outlined-basic" variant="outlined" size="small"/>
                                </Stack>
                            </Box>
                        </Stack>
                        
                        <Stack direction = "column" spacing={1} paddingLeft="100px">
                            <Typography variant="h6" fontWeight="bold" color="gray" textAlign="left">Options</Typography>
                            <Box sx={{color: "gray"}}>
                                <FormControlLabel control={<Checkbox size="small"/>} label="This employee has admin privileges" />
                            </Box>
                            <Typography variant="h6" fontWeight="bold" color="gray" textAlign="left">Stores</Typography>
                            <Box sx={{color: "gray", display:'flex'}}>
                                <FormControlLabel control={<Checkbox size="small"/>} label="Retro Rewind" />
                            </Box>
                        </Stack>
                    </Stack>
                        <Box
                            sx={{display: 'flex', justifyContent: 'right'}}
                        >
                            <Button variant="contained" size="medium" sx={{textTransform: "none", marginTop: "20px", paddingLeft: "10px", paddingRight: "10px", minWidth: "100px", maxWidth: "100px"}}>Save</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
        
    )
}