import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const AddTaskPopup = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add your task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add your task along with the description (optional) and choose the appropriate priority tag.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter Task"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description (Optional)"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                    />
                    <FormControl sx={{ pt: 3 }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Important" />
                            <FormControlLabel value="male" control={<Radio />} label="Medium" />
                            <FormControlLabel value="other" control={<Radio />} label="Normal" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Create</Button>
                    <Button variant='primary' onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddTaskPopup;