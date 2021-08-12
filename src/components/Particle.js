import React from "react";
import Particles from "react-particles-js";
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridStyle: {
        position: "relative",
      },
});

export default function Particle() {
    const classes = useStyles();
    return (
    <Grid className={classes.gridStyle}>
        <Particles
            width='100%'
            height='auto'
            params={{
                particles: {
                    number: {
                      value: 100,
                      density: {
                        enable: true,
                        value_area: 3000
                      }
                    },
                    color: {
                      value: "#000"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 1,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "https://cdn.matteobruni.it/images/particles/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 5,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#000",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 2,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  retina_detect: true,
            }}
        />
    </Grid>
    )
};
