import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    gridStyle: {
        position: "absolute",
        top: '10vh', left: '10vw', 
        fontSize: 24,
      },
});


function About() {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridStyle} direction='column'>
            <Box m={1}>Hello! We are Z-one Robot Project (KRP) team.</Box>

            <Box m={1}>Welcome to our website.</Box>

            <Box m={1}>You can see and comment about our robot or document or otherwise.</Box>

            <Box m={1}>I hope you'll have a good time.</Box>
        </Grid>
    )
}

export default About