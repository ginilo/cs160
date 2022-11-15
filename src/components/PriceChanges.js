import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function PriceChanges(){
  const [stores, setStores] = React.useState('');
  const [categories, setCategories] = React.useState('');

  const handleStoreChange = (event) => {
    setStores(event.target.value);
  };

  const handleCategoriesChange = (event) => {
      setCategories(event.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'item', headerName: 'Item', width: 200 },
    { field: 'condition', headerName: 'Condition', width: 200},
    { field: 'quantity', headerName: 'Quantity', width: 200 },
  ];

  const rows = [
      {id: 0, item: '-', condition: '-', quantity: 1},
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
              <Typography style={{display: 'inline-block'}} variant="h4" color="gray" paddingLeft="45px" paddingBottom="40px">Pricing</Typography>
          </Box>
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
                      <FormControl sx={{minWidth: 200 }} size="small">
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
                      <FormControl sx={{minWidth: 200 }} size="small">
                          <InputLabel htmlFor='store-select'>Select categories</InputLabel>
                          <Select
                              labelId="demo-simple-select-helper-label"
                              label="Customer"
                              id="demo-simple-select"
                              value={categories}
                              onChange={handleCategoriesChange}
                          >
                          <MenuItem value={'Category 1'}>Category 1</MenuItem>
                          <MenuItem value={'Category 2'}>Category 2</MenuItem>
                          <MenuItem value={'Category 3'}>Category 3</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>
                  <Box sx={{color: "gray"}}>
                    <FormControlLabel control={<Checkbox size="small"/>} label="Show only uncompetitively priced items" />
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
              <Box
                  component="div"
                  sx={{flexGrow: 1, bgcolor: 'white', p: 2}}
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