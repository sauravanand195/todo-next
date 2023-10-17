import { Box, Card, CardActions, CardContent, CardHeader, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelIcon from '@mui/icons-material/Label';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import axios from "axios";

const TaskCards = ({ todoData, fetchData }) => {
    const basePath = process.env.basePath

    const updatestatus = async (val) => {
        console.log('val :>> ', val);

        try {
            const response = await axios.put(`${basePath}/todo/update-todo`, { id: val._id, task: val.task, description: val.description, priority: val.priority, status: (val.status == 'incomplete') ? 'complete' : 'incomplete' })
            console.log('response :>> ', response);
            if (response?.data?.error == false) {
                console.log('Data updated successfully')
                fetchData()
            } else { console.log('Error msg', response?.data?.message) }
        } catch (err) {
            console.log('Error :>> ', err);
        }
    }

    const getPCode = (val) => {
        switch (val) {
            case 'high': return 'red';
            case 'medium': return 'orange';
            case 'low': return 'blue';
        }
    }

    const deleteTask = async (id) => {
        try {
            const response = await axios.delete(`${basePath}/todo/delete-todo`, { data: { id: id } })
            console.log('response :>> ', response);
            if (response?.data?.error == false) {
                console.log('Data deleted successfully')
                fetchData()
            } else { console.log('Error msg', response?.data?.message) }
        } catch (err) {
            console.log('Error :>> ', err);
        }
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 6 }}>
                <SearchIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
                <TextField fullWidth id="input-with-sx" label="Search your task" variant="standard" />
            </Box>
            <Grid container spacing={4}>
                {todoData?.map((val, ind) => (
                    <Grid item key={ind} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: (val.status == 'complete') ? 'lightgray' : '' }}
                        >
                            <CardHeader
                                action={
                                    <IconButton>
                                        <Tooltip arrow title={val.priority} leaveDelay={400}>
                                            <BookmarksIcon sx={{ color: getPCode(val.priority) }} />
                                        </Tooltip>
                                    </IconButton>
                                }
                                title={<FormGroup>
                                    <Tooltip placement='top-start' title={`${val.status == 'complete' ? 'Mark In-complete' : 'Mark Complete'}`} leaveDelay={200}>
                                        <FormControlLabel control={<Checkbox
                                            checked={val.status == 'complete'}
                                            onChange={() => updatestatus(val)}
                                            icon={<LabelOutlinedIcon />}
                                            checkedIcon={<LabelIcon />}
                                        />} label={val.task} />
                                    </Tooltip>
                                </FormGroup>}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography>{val.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton><EditIcon /></IconButton>
                                <IconButton onClick={() => { deleteTask(val._id) }}><DeleteIcon /></IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}

export default TaskCards;