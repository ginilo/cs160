import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

export default function InventoryHistory(){
    //drop down menu of Summary, Items, History, Transfer
    const [stores, setStores] = React.useState('');

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const inventoryColumns = [
        { field: 'id', headerName: 'ID', width: 0, hide:true },
        { field: 'date', headerName: 'Date', width: 150},
        { field: 'activity', headerName: 'Activity', width: 300 },
        { field: 'price', headerName: 'Sell Price', width: 150 },
        { field: 'quantity', headerName: 'Qty', width: 80 },
        { field: 'by', headerName: 'By', width: 80 },
    ];
    
    const inventoryRows = [
        {id: 0, date: '-', activity: '-', price: '-', quantity: '-', by: '-'},
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
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">History</Typography>
            </Box>
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
                        <TextField id="outlined-basic" label="Search for Product by Name, UPC, or SKU" variant="outlined" size="small" sx={{minWidth: '430px'}}/>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{minWidth: 200 }} size="small">
                                <InputLabel htmlFor='store-select'>Store</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    label="Select Stores"
                                    id="demo-simple-select"
                                    value={stores}
                                    onChange={handleStoreChange}
                                >
                                <MenuItem value={'Retro Rewind'}>Retro Rewind</MenuItem>
                                <MenuItem value={'-'}>Store 2</MenuItem>
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
            sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 1, paddingLeft: 4, paddingRight: 4, paddingBottom: 4}}
        >
                <Box
                    component="div"
                    sx={{flexGrow: 1, bgcolor: 'white', p: 2}}
                >
                    <DataGrid
                        rows={inventoryRows}
                        columns={inventoryColumns}
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