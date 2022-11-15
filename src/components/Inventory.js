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

export default function Inventory(){
    //drop down menu of Summary, Items, History, Transfer
    const [stores, setStores] = React.useState('');
    const [customers, setCustomers] = React.useState('');

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const handleCustomerChange = (event) => {
        setCustomers(event.target.value);
    };

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

    const totalColumns = [
        { field: 'id', headerName: 'ID', width: 50},
        { field: 'count', headerName: 'Count', width: 80},
        { field: 'cost', headerName: 'Cost', width: 80},
        { field: 'price', headerName: 'Price', width: 80}
    ];

    const totalRows = [
        { id: 1, count: 0, cost: '$0.00', price: '$0.00'},
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
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Inventory</Typography>
            </Box>
            <Button variant="contained" size="large" startIcon={<AddIcon />} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', paddingRight: '10px'}} sx={{marginRight: '40px'}}/>
        </Box>
        <Box
            component="div"
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 3, paddingLeft: 2, paddingRight: 2}}
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
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 230 }} size="small">
                            <InputLabel htmlFor='store-select'>All Stores</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Select Stores"
                                id="demo-simple-select"
                                value={stores}
                                onChange={handleStoreChange}
                            >
                            <MenuItem value={'All Stores'}>All Stores</MenuItem>
                            <MenuItem value={'Store 2'}>Store 2</MenuItem>
                            <MenuItem value={'Store 3'}>Store 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 230 }} size="small">
                            <InputLabel htmlFor='store-select'>Select categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Customer"
                                id="demo-simple-select"
                                value={customers}
                                onChange={handleCustomerChange}
                            >
                            <MenuItem value={'Customer'}>Customer</MenuItem>
                            <MenuItem value={'Customer 2'}>Customer 2</MenuItem>
                            <MenuItem value={'Customer 3'}>Customer 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                    
                    </Box>
                    <Button variant="contained" size="large" startIcon={<SearchIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}></Button>
                </Stack>
            </Box>

        </Box>
        <Box
            component="div"
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 1, paddingLeft: 4, paddingRight: 4}}
        >
            <Stack direction= "row" spacing={4}>
                <Box
                    component="div"
                    sx={{flexGrow: 1, bgcolor: 'white', p: 2, minWidth:'650px', maxWidth: '650px'}}
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
                    <Typography style={{display: 'inline-block'}} variant="h6" fontWeight="bold" color="gray">Inventory totals</Typography>
                    <DataGrid
                            rows={totalRows}
                            columns={totalColumns}
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