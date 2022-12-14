import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import AddItemDialog from './AddItemDialog';
import TradeItemDialog from './TradeItemDialog';
import ReturnItemDialog from './ReturnItemDialog';


function Sales () {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, hide: true},
        { field: 'item', headerName: 'Item', width: 300 },
        { field: 'cogs', headerName: 'COGS', width: 100 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'qty', headerName: 'QTY', width: 70 },
        { field: 'subtotal', headerName: 'Subtotal', width: 100},
    ];
    
    const rows = [
        {id: 1, item: '-', cogs: '$0.00', price: '$0.00', qty: '0', subtotal: '0'},
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
            <Typography variant="h4" color="rgb(90, 90, 90)" paddingLeft="45px" paddingBottom="10px">Sale</Typography>
        </Box>

        <Divider />
        <Box
            component="sales-info"
            sx={{ flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 10}}
        >
            <Stack direction="row" spacing={1}>
                <Box sx={{ flexGrow: 0.05}}>
                    <Typography variant="h6" color="gray" align="left" paddingLeft='60px' paddingTop="10px">
                        Details
                    </Typography>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'white', paddingTop: 1, paddingLeft: '65px'}}
                    >
                        
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Purchases
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Returns
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Trades
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Retail Value
                        </Typography>
                        <Divider />
                    </Box>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'white', paddingTop: 1, paddingLeft: '65px'}}
                    >
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Discount
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Shipping
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px">
                            Tax (9.125%)
                        </Typography>
                        <Divider />
                        <Box sx={{color: "gray"}}>
                        <FormControlLabel control={<Checkbox size="small"/>} label="No Tax" />
                        </Box>
                        <Typography variant="subtitle2" color="gray" align="left" paddingTop="3px" paddingBottom="25px" fontWeight="bold">
                            Total
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{ flexGrow: 0.1}}
                >
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'white', paddingTop: "50px"}}
                    >
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                    </Box>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'white', paddingTop: 1}}
                    >
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            $0.00
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="40px" fontWeight="bold">
                            $0.00
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{ flexGrow: 0.3}}
                >
                    <Typography style={{display: 'inline-block'}}variant="h6" color="gray" align="left" paddingTop="10px" paddingRight="10px">
                        Customer
                    </Typography>
                    <Button variant="contained" size="small" startIcon={<AddIcon />} style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px', paddingRight: '1px'}}/>
                    <Box
                        sx={{bgcolor: 'white', paddingTop: 1}}
                    >
                        <Typography style={{display: 'inline-block'}}variant="subtitle2" color="gray" paddingLeft="45px" paddingTop="3px">
                            No Customer Selected.
                        </Typography>
                        <Typography style={{display: 'inline-block'}}variant="subtitle2" color="gray" paddingLeft="5px" paddingTop="3px" fontWeight="bold">
                            Add One
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{ flexGrow: 0.05}}
                >
                    <Typography variant="h6" color="gray" paddingLeft="45px" paddingTop="10px">
                        Payment
                    </Typography>
                    <Box
                        sx={{bgcolor: 'white', paddingTop: 1}}
                    >
                        <Button variant="outlined" size="medium" className="PaymentBtn" sx={{marginLeft: "45px", textTransform: "none", paddingLeft: "30px", paddingRight: "30px"}}>Add Payment</Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
        <Box
            component="tools"
            sx={{ flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 4, minHeight: '100vh'}}
        >
            <Box sx={{ flexGrow: 1, bgcolor: 'white', p: 2}}>
                <Stack direction="row">
                    <Stack direction="row" spacing={2}> 
                            <AddItemDialog/>
                            <TradeItemDialog />
                            <ReturnItemDialog/>
                    </Stack>
                            
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography sx={{marginLeft: "550px"}}>Credit</Typography>
                        <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>Cash</Typography>
                        
                    </Stack>
                </Stack>
                
                <Box
                    sx={{marginTop: '20px'}}
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

export default Sales;