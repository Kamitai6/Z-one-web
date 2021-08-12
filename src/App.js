import './App.css';
import { Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Content from './components/Content';
import About from './components/About';
import PostContent from './components/PostContent';
import ThreeObj from './components/ThreeObj';
import Particle from "./components/Particle";
import Footer from './components/Footer';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridStyle: {
        
    },
});

function App() {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.gridStyle}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Particle />
                        <Main />
                    </Route>
                    <Route exact path ="/about">
                        <Particle />
                        <About />
                    </Route>
                    <Route exact path ="/content">
                        <Content />
                    </Route>
                    <Route exact path ="/post/:id">
                        <PostContent />
                    </Route>
                    <Route exact path ="/threeObj">
                        <ThreeObj />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Grid>
  );
}

export default App;
