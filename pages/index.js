import { useEffect, useState } from 'react'
import AddTaskPopup from '../components/addTaskPopup';
import FooterTodo from '../components/footerTodo';

import { CssBaseline, Stack, AppBar, Toolbar, Typography, Container, Box, Tooltip, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddOutlined from '@mui/icons-material/AddOutlined';
import TaskCards from '../components/taskCards';

const Index = (props) => {
  const basePath = process.env.basePath
  const [open, setOpen] = useState(false)
  const [todoData, setTodoData] = useState(props.data)

  const fetchData = async () => {
    const response = await fetch(`${basePath}/todo/get-todos`)
    const responseObj = await response.json()
    setTodoData(responseObj?.data)
  }

  return (
    <div style={{ backgroundColor: "#FFFCF9" }}>
      <AddTaskPopup open={open} setOpen={setOpen} fetchData={fetchData} />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ pt: 4 }}>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
              Todo App
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Maintain your day-to-day tasks or list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.
            </Typography>
          </Container>
        </Box>
        <Stack sx={{ pt: 4, pb: 4 }} direction="row" justifyContent="center">
          <Tooltip title="Click to create todo" arrow leaveDelay={400}>
            <Button onClick={() => setOpen(true)} variant="contained"><AddOutlined />&nbsp;Create Todo</Button>
          </Tooltip>
        </Stack>
        <TaskCards todoData={todoData} fetchData={fetchData} />
      </main>
      <FooterTodo />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const basePath = process.env.basePath
  const response = await fetch(`${basePath}/todo/get-todos`)
  const responseObj = await response.json()

  return {
    props: {
      data: responseObj.data || null
    }
  }
}

export default Index;