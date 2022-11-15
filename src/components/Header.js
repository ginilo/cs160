import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import './components.style.css';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
        position="fixed"
        elevation="0"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'rgb(243, 243, 243)', paddingBottom: 1}}
      >
        <Toolbar>
          <Button variant="contained" size="large" className="NewSaleBtn" component = {Link} to ="/Sales" sx={{textTransform: "none"}}>+ New Sale</Button>
          <div className="printer">
                <CircleIcon 
                    sx={{color: 'orange', ml: '35px', mt: '10px'}}
                />
                <div className="ReceiptText">Receipt</div>
                <div className="ReceiptText">Printer</div>
            </div>
            <div className="printer">
                <CircleIcon 
                    sx={{color: 'orange', ml: '35px', mt: '10px'}}
                />
                <div className="LabelText">Label</div>
                <div className="LabelText">Printer</div>
            </div>
        <Box sx={{flexGrow: 1}} />
            <div className="InventoryItems"> inventory items need printing </div>
          <IconButton
                onClick={handleClick}
                size="large"
                aria-label="account of current user"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                color="inherit"
              >
                <AccountCircleOutlinedIcon 
                    sx={{color: 'black'}}
                />
              </IconButton>
              <Menu
                 anchorEl={anchorEl}
                 id="account-menu"
                 open={open}
                 onClose={handleClose}
                 onClick={handleClose}
                 PaperProps={{
                   elevation: 0,
                   sx: {
                     overflow: 'visible',
                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     '& .MuiAvatar-root': {
                       width: 32,
                       height: 32,
                       ml: -0.5,
                       mr: 1,
                     },
                     '&:before': {
                       content: '""',
                       display: 'block',
                       position: 'absolute',
                       top: 0,
                       right: 14,
                       width: 10,
                       height: 10,
                       bgcolor: 'background.paper',
                       transform: 'translateY(-50%) rotate(45deg)',
                       zIndex: 0,
                     },
                   },
                 }}
                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} 
                >
                    <MenuItem>
                        Report Issue
                    </MenuItem>
                    <MenuItem>
                        Help
                    </MenuItem>
                    <MenuItem>
                        Print Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        Logout
                    </MenuItem>
                </Menu>
        </Toolbar>
      </AppBar>
    )
}

export default Header;