import { Button, Card, CardContent, CardHeader, Checkbox, Container, FormControlLabel, FormGroup, Grid, IconButton, Stack, Typography } from "@mui/material";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelIcon from '@mui/icons-material/Label';
import AppNavBar from "../components/appNavBar";
import FooterTodo from "../components/footerTodo";
import { useState } from "react";

const Swapper = () => {
    const [team, setTeam] = useState([[
        { name: 'Saurav', state: false },
        { name: 'Anvesh', state: false },
        { name: 'Viraj', state: false },
        { name: 'Polar', state: false },
        { name: 'Tharic', state: false }
    ], [
        { name: 'ERT', state: false },
        { name: 'MAn', state: false }
    ]])

    const updateSelection = (ind, e, bol) => {
        let tm = []
        tm[bol] = team[bol]
        tm[bol ? 0 : 1] = [...team[bol ? 0 : 1]]
        tm[bol][ind].state = e.checked
        setTeam([[...tm[0]], [...tm[1]]])
    }

    const modifyTeams = (bol) => {
        let sel = [], tm = []
        tm[bol] = team[bol]
        tm[bol] = tm[bol].filter(i => { if (i.state === true) sel.push({ name: i.name, state: false }); else return true })
        tm[bol ? 0 : 1] = [...team[bol ? 0 : 1], ...sel]
        setTeam([[...tm[0]], [...tm[1]]])
    }

    return (
        <div>
            <AppNavBar label="Home" />
            <Container maxWidth="md" sx={{ minHeight: '78vh' }}>
                <Grid container pt={8} spacing={2}>
                    {team.map((team, index) => <Grid item md={6} sm={6} xs={6} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardHeader title={<Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>Team A</Typography>} />
                            <CardContent sx={{ flexGrow: 1, ml: '8%' }}>
                                {team.map((val, ind) => {
                                    return (<FormGroup key={ind}>
                                        <FormControlLabel control={<Checkbox
                                            checked={val.state}
                                            onChange={(e) => updateSelection(ind, e.target, index)}
                                            icon={<LabelOutlinedIcon />}
                                            checkedIcon={<LabelIcon />}
                                        />} label={val.name} />
                                    </FormGroup>)
                                })}
                            </CardContent>
                        </Card>
                    </Grid>)}
                </Grid>
                <Stack sx={{ pt: 2 }} direction="column" justifyContent="center" spacing={2}>
                    <Button variant="contained" size="small" onClick={() => { modifyTeams(0) }}>Transfer A to B</Button>
                    <Button variant="contained" size="small" onClick={() => { modifyTeams(1) }}>Transfer B to A</Button>
                </Stack>
            </Container >
            <FooterTodo />
        </div >
    );
}

export default Swapper;