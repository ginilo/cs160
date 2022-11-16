import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';

function StashedSales() {
    const columns = [
        { field: 'id', headerName: 'Sale ID', width: 170 },
        { field: 'location', headerName: 'Location', width: 170 },
        { field: 'createdOn', headerName: 'Created On', width: 170 },
        { field: 'createdBy', headerName: 'Created By', width: 170 },
        { field: 'status', headerName: 'Status', width: 300 },
    ];
    
    const rows = [
        {id: 1, location: 'Retro Rewind', createdOn: '9/30/2022', createdBy: '-', status: 'Open'},
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
                <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Stashed Sales</Typography>
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
    )
}

export default StashedSales;