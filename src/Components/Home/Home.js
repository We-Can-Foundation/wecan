import React from "react";
import Header from "../NavBar Header/Header";

const Home = (props) => {
    return (
        <div>
            <Header windowSize={props.windowSize}/>
            <div className={"homeCont"}>

            </div>
        </div>
    );
}

export default Home;