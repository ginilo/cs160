import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link, Outlet } from "react-router-dom"

export default function MainContent(){

 return ( 
        <Box
        component="MainContent"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
        <Toolbar />
        <Outlet />
      </Box>
 )
}