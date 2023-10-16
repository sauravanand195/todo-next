import { useEffect, useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FooterTodo from '../components/footerTodo';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchIcon from "@mui/icons-material/Search";
import AddTaskPopup from '../components/addTaskPopup';

const cards = [1, 2, 3, 4, 5, 6];

const defaultTheme = createTheme();

const Index = () => {
  const [open, setOpen] = useState(false)
  const basePath = process.env.basePath
  useEffect(() => {
    const fetchdata = async () => {
      // const response = await fetch(`${basePath}/todo/get-todos`)
      // const responseObj = await response.json()
      // console.log(responseObj);
    }
    fetchdata()
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <AddTaskPopup open={open} setOpen={setOpen} />
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
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Todo App
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Maintain your day-to-day tasks or list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.
            </Typography>
          </Container>
        </Box>
        <Stack sx={{ pt: 4, pb: 4 }} direction="row" justifyContent="center" onClick={() => setOpen(true)}>
          <Button variant="contained"><AddCircleOutlineOutlinedIcon />&nbsp;Create Todo</Button>
        </Stack>
        <Container maxWidth="lg">
          <TextField sx={{ pb: 4 }}
            fullWidth
            id="search-bar"
            className="text"
            label="Enter keyword to search"
            variant="outlined"
            placeholder="Search text..."
            size="small"
          />

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <FooterTodo />
    </ThemeProvider>
  );
}

export default Index;