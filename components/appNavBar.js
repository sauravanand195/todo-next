import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const AppNavBar = ({ label }) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <HomeIcon sx={{ mr: 1 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    {label}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppNavBar;