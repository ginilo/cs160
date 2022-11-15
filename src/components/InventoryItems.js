import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function InventoryItems(){
    //drop down menu of Summary, Items, History, Transfer

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', display: 'flex', flexDirection: 'column'}}
        >
            <Box
                component="div"
                sx={{display: 'flex', paddingTop: '30px'}}
            >
                <Box
                component="div"
                sx={{flexGrow: 1, display: 'flex'}}
                >
                    <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Inventory</Typography>
                </Box>
                <Box
                    sx={{bgcolor: 'white', paddingTop: 1, marginRight: '10px'}}
                >
                    <Button variant="outlined" size="medium" component = {Link} to ="/Inventory" startIcon={<ArrowBackIcon />} className="backToListBtn" sx={{textTransform: "none", paddingLeft: "10px", paddingRight: "10px"}}>Back to List</Button>
                </Box>
            </Box>
            <Box
                component="div"
                sx={{flexGrow: 1, bgcolor: 'rgb(243, 243, 243)', p: 3, paddingLeft: 2, paddingRight: 2}}
            >
                <Box
                    component="div"
                    sx={{bgcolor: 'white', p: 3}}
                >
                    <Stack direction="row">
                        <Box
                            component="div"
                            sx={{flexGrow: 1, display: 'flex'}}
                        >
                            <Stack direction="column" spacing={1}>
                                <Typography variant="p1" color="gray">Search for Product by Name, UPC, or SKU</Typography>
                                <TextField id="outlined-basic" label="Type to search" variant="outlined" size="small"/>
                            </Stack>
                        </Box>
                        <Box
                            sx={{bgcolor: 'white', paddingTop: 1, marginRight: '10px', marginLeft: '20px'}}
                        >
                            <Button variant="outlined" size="medium" sx={{textTransform: "none", paddingLeft: "10px", paddingRight: "10px"}}>Cancel</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
        
    )
}