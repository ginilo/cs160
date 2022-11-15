import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export default function Inventory(){
    //drop down menu of Summary, Items, History, Transfer
    const [stores, setStores] = React.useState('');
    const [categories, setCategories] = React.useState('');

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategories(event.target.value);
    };

    const inventoryColumns = [
        { field: 'id', headerName: 'Stock #', width: 160 },
        { field: 'condition', headerName: 'Condition', width: 180},
        { field: 'item', headerName: 'Item', width: 200 },
        { field: 'store', headerName: 'Store', width: 150 },
        { field: 'price', headerName: 'Price', width: 80 },
        { field: 'quantity', headerName: 'Quantity', width: 80 },
    ];
    
    const inventoryRows = [
        {id: 0, condition: '-', item: '-', store: 'Retro Rewind', price: '$0.00', quantity: 1},
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
            <Button variant="contained" size="large" component = {Link} to ="/Inventory/Items" startIcon={<AddIcon />} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', paddingRight: '10px'}} sx={{marginRight: '40px'}}/>
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
                        <TextField id="outlined-basic" label="Search by keyword" variant="outlined" size="small"/>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl sx={{minWidth: 230 }} size="small">
                                <InputLabel htmlFor='store-select'>Select categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    label="Customer"
                                    id="demo-simple-select"
                                    value={categories}
                                    onChange={handleCategoryChange}
                                >
                                <MenuItem value={'Category'}>Category</MenuItem>
                                <MenuItem value={'Category 2'}>Category 2</MenuItem>
                                <MenuItem value={'Category 3'}>Category 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
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
                        <Button variant="contained" size="large" startIcon={<SearchIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}></Button>
                    </Stack>
                </Box>
                    <Button variant="contained" size="medium" startIcon={<ArrowForwardIcon />} sx={{textTransform: "none"}}>
                        Export CSV
                    </Button>
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