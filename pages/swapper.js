import { Button, Card, CardContent, CardHeader, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, Stack, Typography } from "@mui/material";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelIcon from '@mui/icons-material/Label';
import AppNavBar from "../components/appNavBar";
import FooterTodo from "../components/footerTodo";
import { useState } from "react";

const Swapper = () => {
    const [team, setTeam] = useState([
        { name: 'Saurav', state: false },
        { name: 'Anvesh', state: false },
        { name: 'Viraj', state: false },
        { name: 'Polar', state: false },
        { name: 'Tharic', state: false }
    ])
    const [teamB, setTeamB] = useState([])

    const updateSelection = (ind, val, e) => {
        let tm = team
        tm[ind].state = e.checked
        setTeam(tm)
    }

    const modifyTeams = () => {
        let sel = [], rem = []
        rem = team.filter(i => { if (i.state === true) sel.push(i); else return true })
        setTeamB([...teamB, ...sel]); setTeam(rem)
    }

    return (
        <div>
            <AppNavBar label="Home" />
            <Container maxWidth="md" sx={{ minHeight: '78vh' }}>
                <Grid container pt={8} spacing={2}>
                    <Grid item md={6} sm={6} xs={6}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardHeader title={<Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>Team A</Typography>} />
                            <CardContent sx={{ flexGrow: 1, ml: '8%' }}>
                                {team.map((val, ind) => {
                                    return (<FormGroup key={ind}>
                                        <FormControlLabel control={<Checkbox
                                            id="checkbox-elem"
                                            onChange={(e) => updateSelection(ind, val, e.target)}
                                            icon={<LabelOutlinedIcon />}
                                            checkedIcon={<LabelIcon />}
                                        />} label={val.name} />
                                    </FormGroup>)
                                })}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardHeader title={<Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>Team B</Typography>} />
                            <CardContent>
                                {teamB.map((val, ind) => {
                                    return (<FormGroup key={ind}>
                                        <FormControlLabel control={<Checkbox
                                            onChange={() => {}}
                                            icon={<LabelOutlinedIcon />}
                                            checkedIcon={<LabelIcon />}
                                        />} label={val.name} />
                                    </FormGroup>)
                                })}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Stack sx={{ pt: 2 }} direction="column" justifyContent="center" spacing={2}>
                    <Button variant="contained" size="small" onClick={() => { modifyTeams() }}>Transfer A to B</Button>
                    <Button variant="contained" size="small">Transfer B to A</Button>
                </Stack>
            </Container >
            <FooterTodo />
        </div >
    );
}

export default Swapper;