import { useState } from 'react'
import FooterTodo from '../components/footerTodo';
import { CustomToolTip } from '../public/js/commonFun';
import { CssBaseline, Stack, Typography, Container, Box, Button } from '@mui/material';
import AddOutlined from '@mui/icons-material/AddOutlined';
import TaskCards from '../components/taskCards';
import TaskPopup from '../components/taskPopup';
import AppNavBar from '../components/appNavBar';

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
      <TaskPopup open={open} setOpen={setOpen} fetchData={fetchData} action="create" />
      <CssBaseline />
      <AppNavBar label="Home" />
      <main style={{ minHeight: '78vh' }}>
        <Box sx={{ pt: 4 }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" align="center" color="text.primary" gutterBottom>
              Organize your work and life, finally.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Maintain your day-to-day tasks or list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.
            </Typography>
          </Container>
        </Box>
        <Stack sx={{ pt: 2, pb: 4 }} direction="row" justifyContent="center">
          <CustomToolTip title="Click to create todo" arrow>
            <Button onClick={() => setOpen(true)} variant="contained"><AddOutlined />&nbsp;Create Todo</Button>
          </CustomToolTip>
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