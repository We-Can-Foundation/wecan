import React from 'react';
import useWindowSize from "./useWindowSize";
import Header from "./Components/NavBar Header/Header";
import Home from "./Components/Home/Home";
import Education from "./Components/Eduaction/Education";
import Activities from "./Components/Activities/Activities";
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <Header windowSize={useWindowSize()}/>
            <Switch>
                <div className={"container"}>
                    <Route path="/" exact component={Home}>
                        <Home windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/education">
                        <Education/>
                    </Route>
                    <Route path="/activities">
                        <Activities/>
                    </Route>
                    <Route path="/therapy">

                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
