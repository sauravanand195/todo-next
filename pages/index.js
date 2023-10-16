import * as React from 'react';
import { useEffect } from 'react'

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
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
import { InputAdornment, TextField } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const cards = [1, 2, 3, 4, 5, 6];

const defaultTheme = createTheme();

const Index = () => {
  const basePath = process.env.basePath
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`${basePath}/todo/get-todos`)
      const responseObj = await response.json()
      console.log(responseObj);
    }
    fetchdata()
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <TextField fullWidth id="outlined-basic" label="Task" variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AssignmentOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <Stack sx={{ pt: 4, pb: 8 }} direction="row" justifyContent="center">
            <Button variant="contained"><AddCircleOutlineOutlinedIcon />&nbsp;Add Todo</Button>
          </Stack>
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