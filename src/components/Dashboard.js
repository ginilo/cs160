import * as React from 'react';
import Box from '@mui/material/Box';
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
import moment from 'moment';
import './components.style.css';

function Dashboard () {
    const [freq, setFreq] = React.useState(1);
    const [category, setCategory, ] = React.useState('');
    const [stores, setStores] = React.useState('');
    const [date, setDate] = React.useState(null);
    const [sort, setSort] = React.useState('');
    const [overview, setOverview] = React.useState('');
    const [searchDate, setSearchDate] = React.useState('Currently showing results for ');

    const handleFreqChange = (event) => {
        setFreq(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleStoreChange = (event) => {
        setStores(event.target.value);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate)
        setSearchDate("Currently showing results for " + moment(newDate).format('MM/DD/YYYY'))
    };

    const handleOverviewChange = (event) => {
        setOverview(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, hide: true},
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
            sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', flexDirection: 'column'}}
        >
        <Box
            component="div"
            sx={{flexGrow: 1, display: 'flex', paddingTop: '30px'}}
        >
            <Typography variant="h4" color="rgb(90, 90, 90)" paddingLeft="45px" paddingBottom="40px">Dashboard</Typography>
        </Box>
        <Box
            component="tools"
            sx={{ flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 4 }}
        >
            <Box
                sx={{flexGrow: 1, bgcolor: 'white', p: 8, paddingBottom: 2, paddingLeft: 3}}
            >
                <Stack direction="row" spacing={1}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl sx={{minWidth: 120 }} size="small">
                            <Select
                            id="demo-simple-select"
                            value={freq}
                            onChange={handleFreqChange}
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
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField size="small" {...params} />}
                            />
                            </LocalizationProvider>
                        </FormControl>
                    </Box>
                    <Divider orientation="vertical" sx={{bgcolor: 'black'}}/>
                    <Box sx={{ minWidth: 50, maxWidth: 50 }}>
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
                    </Box>
                    <Box sx={{ minWidth: 120, flexGrow: 1}}>
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
                    </Box>
                    <Button variant="contained" size="large" style={{textTransform: "none"}}>Apply Filters</Button>
                </Stack>
            </Box>
        </Box>
        <Box
            component="tools"
            sx={{bgcolor: 'rgb(243, 243, 243)', paddingLeft: 4, paddingRight: 4, paddingBottom: 4, minHeight:'100vh'}}
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
                            value={sort}
                            onChange={handleSortChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="By Category" />
                        </Tabs>
                    </Box>
                    <Box
                        sx={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}
                    >
                        <Stack direction="column" spacing={1}>
                            <Box
                                sx={{bgcolor: 'Background.paper', display: 'flex', minWidth: '900px', maxWidth: '900px', paddingLeft: '10px'}}
                            >
                                <Box
                                    sx={{display: 'flex', flexGrow: 1}}
                                >
                                <Box
                                    sx={{flexGrow: 1, display: 'flex', alignItems: 'left', justifyContent: 'left'}}
                                >

                                    <Typography variant="subtitle1" color= 'gray'>
                                        {searchDate}
                                    </Typography>
                                </Box>
                                <Box >
                                    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                                        <InputLabel htmlFor='overview-select'>Overview</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            label="Overview"
                                            id="demo-simple-select"
                                            value={overview}
                                            onChange={handleOverviewChange}
                                        >
                                        <MenuItem value={1}>Overview</MenuItem>
                                        <MenuItem value={2}>Store 2</MenuItem>
                                        <MenuItem value={3}>Store 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                </Box>
                            </Box>
                            <Typography variant="h6" fontWeight="bold" color="gray">Total Sales</Typography>
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
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="p1" fontWeight="bold" color="gray">Total</Typography>
                                <Typography variant="p1" fontWeight="bold" color="gray">Video Games</Typography>
                                <Typography variant="p1" fontWeight="bold" color="gray">Trading Cards</Typography>
                                <Typography variant="p1" fontWeight="bold" color="gray">Miscellaneous</Typography>
                            </Stack>
                            <Stack direction="row" spacing={4}>
                                <Typography variant="p1" color="gray" sx={{marginLeft: "140px"}}>$0.00</Typography>
                                <Typography variant="p1" color="gray" >$0.00</Typography>
                                <Typography variant="p1" color="gray">$0.00</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
      </Box>
    )
}

export default Dashboard;