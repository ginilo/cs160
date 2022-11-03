import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MainContent from './MainContent';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { CssBaseline, ListItemIcon } from '@mui/material';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Header from './Header.js';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    // const [open, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen((prevState) => (prevState => !prevState))};
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
    <Box sx={{ display: 'flex'}}>
        <CssBaseline></CssBaseline>
        <Header></Header>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem key={"Dashboard"} disablePadding >
                <ListItemButton component = {Link} to ="/">
                <ListItemIcon>
                    <HomeIcon></HomeIcon>
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
                </ListItemButton>
                </ListItem>

            <ListItem key={"Sales"} onClick={() => handleClick} disablePadding>
                <ListItemButton component = {Link} to ="/Sales">
                <ListItemIcon>
                    <PointOfSaleIcon></PointOfSaleIcon>
                </ListItemIcon>
                <ListItemText primary={"Sales"} />
                {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </ListItem>
                
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="salelist" disablePadding>
                <ListItemButton sx={{ pl: 9}}  component = {Link} to ="/Sales/StashedSales">
                    <ListItemText primary="Stashed Sales" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Sales/CompletedSales">
                    <ListItemText primary="Completed Sales" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Sales/ItemsSold">
                    <ListItemText primary="Items Sold" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Sales/ItemsTraded">
                    <ListItemText primary="Items Traded" />
                </ListItemButton>
                </List>
            </Collapse>

            <ListItem key={"Shipping"} disablePadding>
                <ListItemButton component = {Link} to ="/Shipping">
                <ListItemIcon>
                    <LocalShippingIcon></LocalShippingIcon>
                </ListItemIcon>
                <ListItemText primary={"Shipping"} />
                </ListItemButton>
                </ListItem>

            <ListItem key={"Inventory"} onClick={() => handleClick} disablePadding>
                <ListItemButton component = {Link} to ="/Inventory/Summary">
                <ListItemIcon>
                    <InventoryIcon></InventoryIcon>
                </ListItemIcon>
                <ListItemText primary={"Inventory"} />
                {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="inventorylist" disablePadding>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Inventory/Summary">
                    <ListItemText primary="Summary" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Inventory/Items">
                    <ListItemText primary="Items" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Inventory/History">
                    <ListItemText primary="History" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 9 }}  component = {Link} to ="/Inventory/Transfer">
                    <ListItemText primary="Transfer" />
                </ListItemButton>
                </List>
            </Collapse>

            <ListItem key={"Customers"} disablePadding>
                <ListItemButton component = {Link} to ="/Customers">
                <ListItemIcon>
                    <LoyaltyIcon></LoyaltyIcon>
                </ListItemIcon>
                <ListItemText primary={"Customers"} />
                </ListItemButton>
                </ListItem>
             <ListItem key={"Price Changes"} disablePadding>
                <ListItemButton component = {Link} to ="/PriceChanges">
                <ListItemIcon>
                    <CurrencyExchangeIcon></CurrencyExchangeIcon>
                </ListItemIcon>
                <ListItemText primary={"Price Changes"} />
                </ListItemButton>
                </ListItem>
             <ListItem key={"Admin"} disablePadding>
                <ListItemButton component = {Link} to ="/Admin">
                <ListItemIcon>
                    <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
                </ListItemIcon>
                <ListItemText primary={"Admin"} />
                </ListItemButton>
                </ListItem>   
           
           </List>
      </Drawer>
      <MainContent />
    </Box>
  );
}
