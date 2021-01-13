import React, {useState} from 'react';
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
import Header from "./Components/NavBar Header/Header";
import usePersistedState from "./usePersistedState";
import Therapy from "./Components/Therapy/Therapy";
import Register from "./Components/Login/Register";

function App() {
    const [pageIndex, setIndex] = usePersistedState(0);
    const [eduCategory, setEduCategory] = useState(0);
    return (
        <Router>
            <div className={"sectionCont"}>
                <Header index={pageIndex} setIndex={setIndex}  windowSize={useWindowSize()}/>
                <Switch>
                    <Route path="/" exact component={Home}>
                        <Home index={pageIndex} setIndex={setIndex} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/education">
                        <Education setIndex={setIndex} category={eduCategory} setCategory={setEduCategory} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/activities">
                        <Activities setIndex={setIndex} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/therapy">
                        <Therapy setIndex={setIndex} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
