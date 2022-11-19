import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Customers(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 70, hide: true},
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'email', headerName: 'Email', width: 170 },
        { field: 'mobile', headerName: 'Mobile', width: 170 },
        { field: 'balance', headerName: 'Balance', width: 100 },
        { field: 'notifications', headerName: 'Notifications', width: 100 },
    ];
    
    const rows = [
        {id: 1, name: '-', email: '-', mobile: '-', balance: '$0.00', notifications: 0},
    ];

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', flexDirection: 'column'}}
        >
        <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex', paddingTop: '30px'}}
        >
            <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex'}}
            >
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Customers</Typography>
            </Box>
            <Button variant="contained" size="large" component = {Link} to ="/Customers/New" sx={{textTransform: "none", marginRight: '40px', maxHeight: '50px'}}>Add Customer</Button>
        </Box>
        <Box
            component="div"
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 4}}
        >
            <Box
                component="div"
                sx={{flexGrow: 1, bgcolor: 'white', p: 4}}
            >
                <Stack direction="row" spacing={2}>
                    <Box
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        <Stack direction="row" spacing={2}>
                            <TextField id="outlined-basic" label="Search by keyword" variant="outlined" size="small" style={{maxWidth: '200px'}}/>
                            <Box sx={{color: "gray"}}>
                                <FormControlLabel control={<Checkbox size="small"/>} label="Has open balance" />
                                <FormControlLabel control={<Checkbox size="small"/>} label="Has open notifications" />
                            </Box>
                        </Stack>
                    </Box>
                    <Button variant="contained" size="large" startIcon={<SearchIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}></Button>
                </Stack>
            </Box>
            <Box
            component="div"
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', paddingTop: 4}}
            >
                <Box
                    component="div"
                    sx={{flexGrow: 1, bgcolor: 'white', p: 4}}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        autoHeight
                    />
                </Box>

            </Box>
        </Box>
        </Box>
    )
}