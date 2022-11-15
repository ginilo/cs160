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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export default function InventorySummary(){
    //drop down menu of Summary, Items, History, Transfer
    const [stores, setStores] = React.useState('');
    const [categories, setCategory] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [aging, setAging] = React.useState('');

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const handleCategoriesChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handleAgingChange = (event) => {
        setAging(event.target.value);
    };

    const inventoryColumns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 130},
        { field: 'count', headerName: 'Count', width: 90 },
        { field: 'cost', headerName: 'Cost', width: 70 },
        { field: 'price', headerName: 'Price', width: 80 },
    ];
    
    const inventoryRows = [
        {id: 1, name: 'Retro Rewind', count: '0', cost: '$0.00', price: '$0.00'},
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
                                value={categories}
                                onChange={handleCategoriesChange}
                            >
                            <MenuItem value={'Category'}>Category</MenuItem>
                            <MenuItem value={'Category 2'}>Category 2</MenuItem>
                            <MenuItem value={'Category 3'}>Category 3</MenuItem>
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
            <Stack direction= "row" spacing={4}>
                <Box
                    component="div"
                    sx={{flexGrow: 1, bgcolor: 'white', p: 2, minWidth:'650px', maxWidth: '650px'}}
                >
                    <Stack direction= "row" spacing={2}>
                    <Tabs
                        orientation="vertical"
                        textColor="secondary"
                        indicatorColor="secondary"
                        value={sort}
                        onChange={handleSortChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider'}}
                    >
                        <Tab label="By Store" />
                        <Tab label="By Category" />
                    </Tabs>
                    <DataGrid
                        rows={inventoryRows}
                        columns={inventoryColumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        autoHeight
                    />
                    </Stack>
                </Box>
                <Stack direction= "column" spacing={3}>
                    <Box
                        component="div"
                        sx={{flexGrow: 1, bgcolor: 'white', p: 2, minWidth: '370px', maxWidth: '370px'}}
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
                    <Box
                        component="div"
                        sx={{flexGrow: 1, bgcolor: 'white', p: 2, paddingBottom: 30}}
                    >
                        <Typography style={{display: 'inline-block'}} variant="h6" fontWeight="bold" color="gray">Inventory aging by</Typography>
                        <FormControl sx={{minWidth: 90, maxWidth: 90, marginLeft: '10px'}} size="small">
                            <InputLabel htmlFor='store-select'>Aging</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Select Stores"
                                id="demo-simple-select"
                                value={aging}
                                onChange={handleAgingChange}
                            >
                            <MenuItem value={'All Stores'}>count</MenuItem>
                            <MenuItem value={'-'}>-</MenuItem>
                            <MenuItem value={'-'}>-</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
            </Stack>
        </Box>
        </Box>
    )
}