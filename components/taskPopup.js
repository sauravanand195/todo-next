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

const TaskPopup = ({ open, setOpen, fetchData, action, selectedTask }) => {
    const [inputData, setInputData] = useState({ task: selectedTask ? selectedTask.task : "", description: selectedTask ? selectedTask.description : "", priority: selectedTask ? selectedTask.priority : "", status: "" })

    const handleClose = () => {
        setOpen(false);
        setInputData({})
    };

    const createTask = async () => {
        const basePath = process.env.basePath
        const paramsToPass = { ...inputData, status: "incomplete" }
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
            } else { console.log('Error msg', response?.data?.message) }
        } catch (err) {
            console.log('Error :>> ', err);
        }
    }

    const updateTask = async () => {
        const basePath = process.env.basePath
        try {
            const response = await axios.put(`${basePath}/todo/update-todo`, { ...inputData, id: selectedTask._id })
            if (response?.data?.error == false) {
                console.log('Data updated successfully')
                handleClose()
                fetchData()
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
                    <TextField autoFocus margin="dense" fullWidth variant="standard" name="task" type="text"
                        label="Enter Task"
                        value={inputData.task}
                        onChange={(e) => setInputData({ ...inputData, task: e.target.value })}
                    />
                    <TextField margin="dense" name="description" type="text" fullWidth variant="standard" multiline
                        label="Description (Optional)"
                        value={inputData.description}
                        onChange={(e) => setInputData({ ...inputData, description: e.target.value })}
                    />
                    <FormControl sx={{ pt: 3 }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
                        <RadioGroup row
                            value={inputData.priority}
                            onChange={(e) => setInputData({ ...inputData, priority: e.target.value })}
                        >
                            <FormControlLabel value="high" control={<Radio />} label="High" />
                            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                            <FormControlLabel value="low" control={<Radio />} label="Low" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    {(action == 'create')
                        ? <Button onClick={() => createTask()}>Create</Button>
                        : <Button onClick={() => updateTask()}>Update</Button>
                    }
                    <Button variant='primary' onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TaskPopup;