import React from 'react';
import useWindowSize from "./useWindowSize";
import Home from "./Components/Home/Home";
import Education from "./Components/Eduaction/Education";
import Activities from "./Components/Activities/Activities";
import Login from "./Components/Login/Login";
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <Switch>
                <div className={"container"}>
                    <Route path="/" exact component={Home}>
                        <Home windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/education">
                        <Education windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/activities">
                        <Activities windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/therapy">

                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>

                </div>
            </Switch>
        </Router>
    );
}

export default App;
