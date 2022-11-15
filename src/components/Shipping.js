import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'customer', headerName: 'Customer', width: 250 },
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'status', headerName: 'Status', width: 170 },
];

const rows = [
    {id: 1, customer: 'Customer', date: '00/00/0000', status: 'Pending'},
];

function Shipping() {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', flexDirection: 'column'}}
        >
        <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex'}}
        >
            <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex', paddingTop: '30px'}}
            >
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Shipping</Typography>
            </Box>
        </Box>
        <Box
            component="tools"
            sx={{ flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 4 }}
        >
            <Box
                sx={{flexGrow: 1, bgcolor: 'white', p: 2, paddingBottom: 2, paddingLeft: 3}}
            >
                <Stack direction="row" spacing={2}>
                    <Box
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        <Stack direction="row" spacing={2}>
                            <TextField id="outlined-basic" label="Search by customer name" variant="outlined" size="small" style={{maxWidth: '250px', minWidth: '250px'}}/>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Pending Only" sx={{color: "gray"}}/>
                        </Stack>
                    </Box>
                    <Button variant="contained" size="large" startIcon={<SearchIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}>
                    </Button>
                </Stack>
            </Box>
        </Box>
        <Box
            component="div"
            sx={{ flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', paddingLeft: 4, paddingRight: 4, paddingBottom: 10 }}
        >
            <Box
                sx={{flexGrow: 1, bgcolor: 'white', p: 2, paddingBottom: 2, paddingLeft: 3}}
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
    )
}

export default Shipping;