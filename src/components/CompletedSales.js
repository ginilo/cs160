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
import { DataGrid } from '@mui/x-data-grid';

function CompletedSales() {
    const [stores, setStores] = React.useState('');
    const [customers, setCustomers] = React.useState('');

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const handleCustomerChange = (event) => {
        setCustomers(event.target.value);
    };

    const columns = [
        { field: 'createdOn', headerName: 'Created On', width: 170 },
        { field: 'location', headerName: 'Location', width: 170 },
        { field: 'createdBy', headerName: 'Created By', width: 170 },
        { field: 'id', headerName: 'Sale ID', width: 200 },
        { field: 'saleAmount', headerName: 'Sale Amount', width: 100 },
    ];
    
    const rows = [
        {id: 1, location: 'Retro Rewind', createdOn: '9/30/2022 0:00 pm', createdBy: '-', saleAmount: '$0.00'},
    ];

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', flexDirection: 'column'}}
        >
        <Toolbar />
        <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex'}}
        >
            <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex'}}
            >
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Completed Sales</Typography>
            </Box>
            <Button variant="contained" size="large" startIcon={<AddIcon />} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', paddingRight: '10px'}} sx={{marginRight: '40px'}}/>
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
                <TextField id="outlined-basic" label="Start Date" variant="outlined" size="small" style={{maxWidth: '130px'}}/>
                <TextField id="outlined-basic" label="End Date" variant="outlined" size="small" style={{maxWidth: '130px'}}/>
                <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 150 }} size="small">
                            <InputLabel htmlFor='store-select'>Select Stores</InputLabel>
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
                    <Box sx={{ minWidth: 120, flexGrow: 1 }}>
                        <FormControl sx={{minWidth: 150 }} size="small">
                            <InputLabel htmlFor='store-select'>Customer</InputLabel>
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

export default CompletedSales;