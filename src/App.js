import React, {useState} from 'react';
import useWindowSize from "./useWindowSize";
import Home from "./Components/Home/Home";
import Education from "./Components/Eduaction/Education";
import Activities from "./Components/Activities/Activities";
import Login from "./Components/Login/Login";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./Components/NavBar Header/Header";
import usePersistedState from "./usePersistedState";
import Therapy from "./Components/Therapy/Therapy";
import Register from "./Components/Login/Register";
import SignUp from "./Components/Login/SignUp";
import Blog from "./Components/Eduaction/Blog";
import BlogList from "./Components/Eduaction/BlogList";

function App() {
    const [pageIndex, setIndex] = usePersistedState(0);
    const [eduCategory, setEduCategory] = useState(0);
    const [actualBlog, setActualBlog] = useState();

    return (
        <Router>
            <div className={"sectionCont"}>
                <Header index={pageIndex} setIndex={setIndex}  windowSize={useWindowSize()}/>
                <Switch>
                    <Route path="/" exact component={Home}>
                        <Home index={pageIndex} setIndex={setIndex} windowSize={useWindowSize()} setBlog={setActualBlog}/>
                    </Route>
                    <Route path="/education" exact component={Education}>
                        <Education setBlog={setActualBlog} setIndex={setIndex} category={eduCategory} setCategory={setEduCategory} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/activities" exact component={Activities}>
                        <Activities setIndex={setIndex} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/therapy" exact component={Therapy}>
                        <Therapy setIndex={setIndex} windowSize={useWindowSize()}/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <SignUp/>
                    </Route>
                    <Route path="/blogs/:id" render={() => <Blog blogs={actualBlog} />}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
