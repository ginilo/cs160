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

export default function InventoryTransfer(){
    //drop down menu of Summary, Items, History, Transfer
    const [transfer, setTransfer] = React.useState('');

    const handleTransferChange = (event) => {
        setTransfer(event.target.value);
    };

    return (
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
                        <FormControl sx={{minWidth: 500 }} size="small">
                            <InputLabel htmlFor='store-select'>Transfer to</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Select Stores"
                                id="demo-simple-select"
                                value={transfer}
                                onChange={handleTransferChange}
                            >
                            <MenuItem value={'Transfer 1'}>Transfer 1</MenuItem>
                            <MenuItem value={'Transfer 2'}>Transfer 2</MenuItem>
                            <MenuItem value={'Transfer 3'}>Transfer 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                    
                    </Box>
                    <Box
                        sx={{bgcolor: 'white', paddingTop: 1, marginRight: '10px'}}
                    >
                        <Button variant="contained" size="medium" sx={{textTransform: "none", paddingLeft: "15x", paddingRight: "15px"}}>Transfer</Button>
                    </Box>
                </Stack>
            </Box>
            <Box
                component="div"
                sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 3, paddingLeft: 2, paddingRight: 2, paddingBottom: 4}}
            >
                <Stack direction= "row" spacing={4}>
                    <Box
                        component="div"
                        sx={{flexGrow: 1, bgcolor: 'white', p: 2, minWidth:'650px', maxWidth: '650px'}}
                    >
                        <Typography style={{display: 'inline-block'}} variant="p1" color="gray">No items scanned</Typography>
                    </Box>
                    <Stack direction= "column" spacing={3}>
                        <Box
                            component="div"
                            sx={{flexGrow: 1, bgcolor: 'white', p: 2, minWidth: '370px', maxWidth: '370px'}}
                        >
                            <Typography style={{display: 'inline-block'}} variant="h5" color="gray">0 items selected</Typography>
                            <Typography style={{display: 'inline-block'}} variant="p1" color="gray">Scan SKU or UPC for items to be transferred or enter manually below</Typography>
                        </Box>
                        <Box
                            component="div"
                            sx={{flexGrow: 1, bgcolor: 'white', p: 2, paddingBottom: 3}}
                        >
                            <Stack direction="column" spacing={2}>
                                <Typography style={{display: 'inline-block'}} variant="p1" color="gray">SKU or UPC</Typography>
                                <TextField id="outlined-basic" label="SKU or UPC" variant="outlined" size="small" />
                                <Box
                                    component="div"
                                >
                                    <Button variant="contained" size="medium" sx={{textTransform: "none", paddingLeft: "15x", paddingRight: "15px", minWidth: '200px', maxWidth: '200px'}}>Find item and add to list</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}