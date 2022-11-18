import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function AddItemDialog () {
    
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => { setOpen(true); };
const handleClose = () => { setOpen(false); };
    <div>
    <Button variant="contained" size="auto" onClick={handleClickOpen} sx={{textTransform: "none"}}>Add</Button>
    
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add an Item</DialogTitle>
        <DialogContent>
        <DialogContentText>
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
        />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Done</Button>
        </DialogActions>
    </Dialog>
    </div>
}

export default AddItemDialog;