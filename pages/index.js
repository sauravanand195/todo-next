import { useEffect, useState } from 'react'
import AddTaskPopup from '../components/addTaskPopup';
import FooterTodo from '../components/footerTodo';

import { Checkbox, TextField, createTheme, CardActions, CardContent, Grid, CssBaseline, Stack, AppBar, Toolbar, Typography, Container, Box, Tooltip, Button, Card, CardHeader, IconButton, FormGroup, FormControlLabel } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelIcon from '@mui/icons-material/Label';
import AddOutlined from '@mui/icons-material/AddOutlined';
import SearchIcon from '@mui/icons-material/Search';

const cards = [1, 2, 3, 4, 5, 6];
const colorCode = {
  'high': '#FED7D9',
  'low': '#D6FFFB',
  'normal': '#F9F7B4',
}

const defaultTheme = createTheme()
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    <div style={{ backgroundColor: "#FFFCF9" }}>
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
        <Stack sx={{ pt: 4, pb: 4 }} direction="row" justifyContent="center">
          <Tooltip title="Click to create todo" arrow leaveDelay={400}>
            <Button onClick={() => setOpen(true)} variant="contained"><AddOutlined />&nbsp;Create Todo</Button>
          </Tooltip>
        </Stack>
        <Container maxWidth="lg">
          {/* <TextField sx={{ pb: 4 }}
            fullWidth
            id="search-bar"
            className="text"
            label="Enter keyword to search"
            variant="outlined"
            placeholder="Search text..."
            size="small"
          /> */}
          <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 6 }} >
            <SearchIcon color="primary" sx={{ mr: 1, my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="Search your task" variant="standard" />
          </Box>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardHeader
                    action={
                      <IconButton>
                        <Tooltip arrow title="important" leaveDelay={400}>
                          <BookmarksIcon sx={{ color: "blue" }} />
                        </Tooltip>
                      </IconButton>
                    }
                    title={<FormGroup>
                      <Tooltip placement='top-start' title="Mark Complete" leaveDelay={200}>
                        <FormControlLabel control={<Checkbox
                          icon={<LabelOutlinedIcon />}
                          checkedIcon={<LabelIcon />}
                        />} label="Heading" />
                      </Tooltip>
                    </FormGroup>}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton><EditIcon /></IconButton>
                    <IconButton><DeleteIcon /></IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <FooterTodo />
    </div>
  );
}

export default Index;