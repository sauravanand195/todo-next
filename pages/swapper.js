import { Box, Card, CardContent, CardHeader, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, Typography } from "@mui/material";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelIcon from '@mui/icons-material/Label';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import AppNavBar from "../components/appNavBar";
import FooterTodo from "../components/footerTodo";

const Swapper = () => {
    let contentA = ['Saurav', 'Anvesh', 'Viraj', 'Polar', 'Tharic']
    let contentB = []

    return (
        <div>
            <AppNavBar label="Home" />
            <Container maxWidth="md" sx={{ minHeight: '78vh' }}>
                <Grid container pt={8}>
                    <Grid item md={5} sm={5} xs={5}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardHeader title={<Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>Team A</Typography>} />
                            <CardContent sx={{ flexGrow: 1, ml: '8%' }}>
                                {contentA.map((val, ind) =>
                                    <FormGroup key={ind}>
                                        <FormControlLabel control={<Checkbox
                                            onChange={() => {}}
                                            icon={<LabelOutlinedIcon />}
                                            checkedIcon={<LabelIcon />}
                                        />} label={val} />
                                    </FormGroup>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container md={2} sm={2} xs={2} alignItems="center" justifyContent="center">
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <IconButton><ArrowCircleRightOutlinedIcon color="primary" fontSize="large" /></IconButton>
                            <IconButton><ArrowCircleLeftOutlinedIcon color="primary" fontSize="large" /></IconButton>
                        </Box>
                    </Grid>
                    <Grid item md={5} sm={5} xs={5}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardHeader title={<Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>Team B</Typography>} />
                            <CardContent>
                                {contentB.map((val, ind) =>
                                    <FormGroup key={ind}>
                                        <FormControlLabel control={<Checkbox
                                            onChange={() => {}}
                                            icon={<LabelOutlinedIcon />}
                                            checkedIcon={<LabelIcon />}
                                        />} label={val} />
                                    </FormGroup>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container >
            <FooterTodo />
        </div>
    );
}

export default Swapper;