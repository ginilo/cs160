import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DataGrid } from '@mui/x-data-grid';
import './components.style.css';

function Dashboard () {
    const [freq, setFreq, day] = React.useState('');
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        setFreq(event.target.value);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'store', headerName: 'Store', width: 150 },
        { field: 'sales', headerName: 'Sales', width: 100 },
        { field: 'cogs', headerName: 'COGS', width: 100 },
        { field: 'returns', headerName: 'Returns', width: 100 },
        { field: 'grossProfit', headerName: 'Gross Profit', width: 150 },
        { field: 'salesHistory', headerName: 'Sales History', width: 100},
    ];
    
    const rows = [
        {id: 1, store: 'Retro Rewind', sales: '$0.00', cogs: '$0.00', returns: '$0.00', grossProfit: '$0.00', salesHistory: 'Sales'},
    ];
      
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', paddingTop: 6, display: 'flex', flexDirection: 'column'}}
        >
        <Toolbar />
        <Typography variant="h4" color="rgb(90, 90, 90)" paddingLeft="45px" paddingBottom="40px">Dashboard</Typography>
        <Box
            component="tools"
            sx={{ flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 4 }}
        >
            <Box
                sx={{flexGrow: 1, bgcolor: 'white', p: 8, paddingBottom: 2, paddingLeft: 3}}
            >
                <Stack direction="row" spacing={2}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 120 }} size="small">
                            <Select
                            id="demo-simple-select"
                            value={freq}
                            onChange={handleChange}
                            >
                            <MenuItem value={1}>Daily</MenuItem>
                            <MenuItem value={2}>Monthly</MenuItem>
                            <MenuItem value={3}>Yearly</MenuItem>
                            <MenuItem value={4}>Custom</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 120 }} size="small">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField size="small" {...params} />}
                            />
                            </LocalizationProvider>
                        </FormControl>
                    </Box>
                    <Divider orientation="vertical" sx={{bgcolor: 'black'}}/>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 180 }} size="small">
                            <InputLabel htmlFor='category-select'>Select Categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Select category"
                                id="demo-simple-select"
                                value={"Select category"}
                                onChange={handleChange}
                            >
                            <MenuItem value={1}>Category1</MenuItem>
                            <MenuItem value={2}>Category2</MenuItem>
                            <MenuItem value={3}>Category3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, flexGrow: 1}}>
                        <FormControl sx={{minWidth: 150 }} size="small">
                            <InputLabel htmlFor='store-select'>Select Stores</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Select Stores"
                                id="demo-simple-select"
                                value={"Select Stores"}
                                onChange={handleChange}
                            >
                            <MenuItem value={1}>All Stores</MenuItem>
                            <MenuItem value={2}>Store 2</MenuItem>
                            <MenuItem value={3}>Store 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button variant="contained" size="large" startIcon={<SearchIcon />} style={{maxWidth: '55px', maxHeight: '40px', minWidth: '55px', minHeight: '40px', paddingRight: '10px'}}>
                    </Button>
                </Stack>
            </Box>
        </Box>
        <Box
            component="tools"
            sx={{bgcolor: 'rgb(243, 243, 243)', paddingLeft: 4, paddingRight: 4, paddingBottom: 4 }}
        >
            <Box
                sx={{bgcolor: 'white', p: 2, paddingBottom: 2, paddingLeft: 2}}
            >
                <Stack direction="row" spacing={1}>
                    <Box
                        sx={{bgcolor: 'background.paper', display: 'flex', height: 400 , minWidth: '140px', maxWidth: '140px'}}
                    >
                        <Tabs
                            orientation="vertical"
                            textColor="secondary"
                            indicatorColor="secondary"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="By Store" />
                            <Tab label="By Category" />
                        </Tabs>
                    </Box>
                    <Stack direction="column" spacing={1}>
                    <Box
                        sx={{bgcolor: 'Background.paper', display: 'flex', minWidth: '900px', maxWidth: '900px', paddingLeft: '10px'}}
                    >
                        <Typography variant="subtitle1" color= 'gray' gutterBottom sx={{flexGrow: 1}}>
                            Currently showing results for 
                        </Typography>
                        <Box sx={{ minWidth: 100 }}>
                        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                            <InputLabel htmlFor='overview-select'>Overview</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Overview"
                                id="demo-simple-select"
                                value={"Overview"}
                                onChange={handleChange}
                            >
                            <MenuItem value={1}>Overview</MenuItem>
                            <MenuItem value={2}>Store 2</MenuItem>
                            <MenuItem value={3}>Store 3</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Box>
                    <Box
                        sx={{paddingLeft: '10px'}}
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
                    </Stack>
                </Stack>
            </Box>
        </Box>
      </Box>
    )
}

export default Dashboard;