import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddTaskPopup = ({ open, setOpen, fetchData }) => {
    const Router = useRouter()
    const [inputData, setInputData] = useState({ task: "", description: "", priority: "", status: "" })

    const handleClose = () => {
        setOpen(false);
    };

    const createTask = async () => {
        const basePath = process.env.basePath
        const paramsToPass = { ...inputData, status: "In-complete" }
        try {
            /* Using fetch */
            // const response = await fetch(`${basePath}/todo/add-todo`, {
            //     method: 'post',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(paramsToPass)
            // })
            // const res = await response.json()

            /* Using axios */
            const response = await axios.post(`${basePath}/todo/add-todo`, paramsToPass)
            if (response?.data?.error == false) {
                console.log('Data added successfully')
                handleClose()
                fetchData()
                // window.location.reload()
            } else { console.log('Error msg', response?.data?.message) }
        } catch (err) {
            console.log('Error :>> ', err);
        }
    }

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
                        name="task"
                        label="Enter Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setInputData({ ...inputData, task: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Description (Optional)"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        onChange={(e) => setInputData({ ...inputData, description: e.target.value })}
                    />
                    <FormControl sx={{ pt: 3 }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) => setInputData({ ...inputData, priority: e.target.value })}
                        >
                            <FormControlLabel value="high" control={<Radio />} label="High" />
                            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                            <FormControlLabel value="low" control={<Radio />} label="Low" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => createTask()}>Create</Button>
                    <Button variant='primary' onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddTaskPopup;