import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    makeStyles, 
    Typography, 
    Button, 
    Grid 
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
    typographyTitle: {
        whiteSpace: 'nowrap',
        fontSize: 36,
        fontWeight: 500,
    },
    link: {
        textDecoration: 'none',
        color: '#424242'
    },
    toolbar: {
        minHeight: `64px`, // minHeight を再設定する
    },
    button: {
        textAlign: "center",
    }
}));

const theme = createTheme({
    palette: {
        primary: {
            main: "#00cee8"
        },
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='primary'>
                <Toolbar className={classes.toolbar}>
                    <img src={`${process.env.PUBLIC_URL}/logo/logo.png`} height='60vh' alt="no" />
                    <Typography className={classes.typographyTitle}>
                        <Link to="/" className={classes.link}>
                            Z-one
                        </Link>
                    </Typography>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button variant="contained" className={classes.button}>
                                    <Link to="/about" className={classes.link}>
                                        About
                                    </Link>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className={classes.button}>
                                    <Link to="/content" className={classes.link}>
                                        Cont
                                    </Link>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className={classes.button}>
                                    <Link to="/threeObj" className={classes.link}>
                                        Obj
                                    </Link>
                            </Button>
                        </Grid>
                    </Grid>
                    <PersonIcon />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header