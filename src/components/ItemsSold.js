import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DataGrid } from '@mui/x-data-grid';

function ItemsSold() {
    const salesColumns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 130},
        { field: 'location', headerName: 'Location', width: 90 },
        { field: 'cost', headerName: 'Cost', width: 70 },
        { field: 'sellPrice', headerName: 'Sell Price', width: 80 },
        { field: 'discount', headerName: 'Discount', width: 80 },
        { field: 'net', headerName: 'Net', width: 80}
    ];
    
    const salesRows = [
        {id: 1, location: 'Retro Rewind', createdOn: '9/30/2022', createdBy: '-', status: 'Open'},
    ];

    const glanceColumns = [
        { field: 'id', headerName: 'By Category', width: 150},
        { field: 'net', headerName: 'Net', width: 80}
    ];

    const glanceRows = [
        { id: 'Xbox 360', net: '$0.00'},
        { id: 'Gameboy Color', net: '$0.00'}
    ];

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', paddingTop: 6, display: 'flex', flexDirection: 'column'}}
        >
        <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex'}}
        >
            <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex'}}
            >
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Items Sold</Typography>
            </Box>
        </Box>
        <Box
            component="div"
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 3, paddingLeft: 2, paddingRight: 2}}
        >
            <Box
                component="div"
                sx={{flexGrow: 1, bgcolor: 'white', p: 4, display: "flex"}}
            >
                <Box sx={{flexGrow: 1}}></Box>
                <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 120 }} size="small">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                renderInput={(params) => <TextField size="small" {...params} />}
                            />
                            </LocalizationProvider>
                        </FormControl>
                </Box>
            </Box>

        </Box>
        <Box
            component="div"
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 1, paddingLeft: 4, paddingRight: 4}}
        >
            <Stack direction= "row" spacing={4}>
                <Box
                    component="div"
                    sx={{flexGrow: 1, bgcolor: 'white', p: 2, minWidth:'700px', maxWidth: '700px'}}
                >
                    <Box
                        component="div"
                        sx={{flexGrow: 1, display: "flex"}}    
                    >
                    <Box
                        component="div"
                        sx={{flexGrow: 1}}    
                    >
                        <Typography style={{display: 'inline-block'}} variant="h6" fontWeight="bold" color="gray">Sales</Typography>
                    </Box>
                    <Button variant="contained" size="large" startIcon={<ArrowForwardIcon />} sx={{textTransform: "none"}}>
                        Export CSV
                    </Button>
                    </Box>
                    <Box
                        sx={{marginTop: '10px'}}
                    >
                        <DataGrid
                            rows={salesRows}
                            columns={salesColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            autoHeight
                        />
                    </Box>
                </Box>
                <Box
                    component="div"
                    sx={{flexGrow: 1, bgcolor: 'white', p: 2}}
                >
                    <Typography style={{display: 'inline-block'}} variant="h6" fontWeight="bold" color="gray">At a glance</Typography>
                    <DataGrid
                            rows={glanceRows}
                            columns={glanceColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            autoHeight
                        />
                </Box>
            </Stack>
        </Box>
        </Box>
    )
}

export default ItemsSold;