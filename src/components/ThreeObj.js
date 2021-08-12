import React, { useState, useRef, useEffect } from "react";
import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Grid, Box, Typography, RootRef } from '@material-ui/core';
import ProgressBar from "@ramonak/react-progress-bar";
//import { makeStyles } from "@material-ui/core/styles";


// const useStyles = makeStyles({
//     objStyle: {
//         position: 'absolute',
//         width: '100vw', height: 'auto',
//         textAlign: 'center',
//     },
// });

const ThreeObj = () => {
    //const classes = useStyles();
    const mountRef = useRef(null);
    const [ loadingPercentage, setPercentage ] = useState(0);

    useEffect(() => {
        var model = null;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        const texture = new THREE.TextureLoader();
        const mtlloader = new MTLLoader();
        const objloader = new OBJLoader();

        renderer.setSize( window.innerWidth, window.innerHeight );
        mountRef.current.appendChild( renderer.domElement );

        var axes = new THREE.AxisHelper(1);
        scene.add(axes);

        const lights = [];
        for (let i = 0; i < 3; ++i) {
            lights[i] = new THREE.SpotLight(0xFFFFFF, 1, 0, Math.PI / 4, 10, 0.5);
            lights[i].position.set( -1000,    0,  1000*(i-1) );
            scene.add( lights[i] );
        }
        
        texture.load (
            './obj/carbon fiber eproxy.jpg',
            function ( err ) {
                console.error( 'An error happened.' + err );
            }
        );
        const onProgress = function ( xhr ) {
            if ( xhr.lengthComputable ) {
                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );
                setPercentage(loadingPercentage);
            }
        };
        mtlloader.load('./obj/Full.mtl', function(materials) {
            materials.preload();
            objloader.setMaterials( materials );
            objloader.load(
            './obj/Full.obj',
            ( object ) => {
                scene.add( object );

                object.position.set(0, 0, 0);
                object.rotation.x = 23.5;

                model = object;
            },
            onProgress,
            ( error ) => {
                console.log( 'An error happened:' + error );
            },
            );
        });

        camera.position.z = 1;

        var animate = function () {
            requestAnimationFrame( animate );
            if (model) {
                model.rotation.x += 0.005;
                model.rotation.y += 0.005;
                //model.rotation.z += 0.005;
            }
            renderer.render( scene, camera );
        }

        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        window.addEventListener("resize", onWindowResize, false);

        animate();
    }, []);

    return (
        <RootRef rootRef={mountRef}>
            <Typography component="div">
                <Grid container>
                    <Grid sm={4}>
                        <Box fontSize="h6.fontSize" textAlign="center" m={1}>
                            Now loading
                        </Box>
                    </Grid>
                    <Grid sm={8}>
                        <ProgressBar 
                            completed={loadingPercentage}
                            bgColor="#33eabe"
                            height="30px"
                            width="80%"
                            borderRadius="30px"
                            padding='10px'
                            labelAlignment="center"
                            isLabelVisible={true}
                            baseBgColor="#dde4f6"
                            labelColor="#7825bd"
                        />
                    </Grid>
                </Grid>
            </Typography>
        </RootRef>
    );
}

export default ThreeObj;