import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';

function AddItemDialog () {
    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const [category, setCategory, ] = React.useState('');
    const [stores, setStores] = React.useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, hide: true},
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'stockStore', headerName: 'Stock Number / Store', width: 200 },
        { field: 'age', headerName: 'Age', width: 150 },
        { field: 'price', headerName: 'Price', width: 90 },
        { field: 'available', headerName: 'Available', width: 170 },
    ];
    
    const rows = [
        {id: 1, name: "-", stockStore: "-", age: "-", price: "-", available: '-'}
    ];

    return (
        <div>
        <Button variant="contained" size="auto" onClick={handleClickOpen} sx={{textTransform: "none"}}>Add</Button>
        
        <Dialog open={open} onClose={handleClose} minWidth="1500px" maxWidth="1500px">
            <Stack direction="row">
                <Box
                    sx={{flexGrow: 1}}
                >
                    <DialogTitle>Add an Item</DialogTitle>
                </Box>
                <Box
                    sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
                >
                    <Button onClick={handleClose} startIcon={<CloseIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}></Button>
                </Box>
            </Stack>
            <Divider />
            <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <Stack direction="row" spacing={5}>
                <TextField sx={{minWidth: 300, maxWidth: 300}} size="small" label="Product Title" />
                <FormControl sx={{minWidth: 180 }} size="small">
                    <InputLabel htmlFor='category-select'>Select Categories</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            label="Select category"
                            id="demo-simple-select"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value={'Custom'}>Custom</MenuItem>
                            <MenuItem value={'Video Games'}>Video Games</MenuItem>
                            <MenuItem value={'Trading Cards'}>Trading Cards</MenuItem>
                        </Select>
                </FormControl>
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
                        <MenuItem value={'Retro Rewind'}>Retro Rewind</MenuItem>
                        </Select>
                </FormControl>
                <Button variant="contained" size="large" startIcon={<SearchIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}/>
            </Stack>
            <Box
                sx={{marginTop: "20px", minWidth: "900px", maxWidth: "900px"}}
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
            <Divider sx={{marginTop: "20px"}}/>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Done</Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default AddItemDialog;