import {AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {CryptoState} from '../CryptoContext';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
    const {currency, setCurrency} = CryptoState();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",

            },
            type: "dark",           

        },       

    });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={() => navigate("/")} className={classes.title}
                variant='h6'>Crypto Hunter</Typography>
                <Select 
                variant="outlined" 
                style={{width:100, height:40, marginRight: 15,}}
                value={currency}
                onChange={(e)=> setCurrency(e.target.value)}
                >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>

            </Toolbar>

        </Container>
    </AppBar>
    </ThemeProvider>
  )
};
export default Header;
