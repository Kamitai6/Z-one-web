import React from 'react'
import { Grid } from '@material-ui/core'
import Image from 'material-ui-image'
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from 'react-player'


const useStyles = makeStyles({
    imageStyle: {
        position: 'absolute',
        top: '10vh',
      },
    movieStyle: {
        position: 'relative',
        paddingTop: '56.25%'
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    }
});

function Main() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={classes.imageStyle}>
                <Image src={`${process.env.PUBLIC_URL}/main.png`} aspectRatio={(16/9)} imageStyle={{width: '100vw', height: 'auto', left: '0vh', top: '-10vw'}} />
            </Grid>
            <Grid item xs={12} className={classes.movieStyle}>
                <ReactPlayer
                    className={classes.reactPlayer}
                    url='https://www.youtube.com/embed/gYiTk7rktQc'
                    width='100%'
                    height='100%'
                />
            </Grid>
        </Grid>
    )
}

export default Main