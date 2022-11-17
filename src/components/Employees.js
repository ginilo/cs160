import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function Employees(){
    const columns = [
        { field: 'id', headerName: 'ID', width: 70, hide: true},
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 500 },
        { field: 'store', headerName: 'Store', width: 300 },
    ];
    
    const rows = [
        {id: 1, name: '-', email: '-', store: '-'},
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
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Employees</Typography>
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
                    <Box
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        <Stack direction="row" spacing={2}>
                            <TextField id="outlined-basic" label="Search by keyword" variant="outlined" size="small" style={{maxWidth: '200px'}}/>
                            <Box sx={{color: "gray"}}>
                            </Box>
                        </Stack>
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