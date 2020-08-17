import React, {useEffect} from "react";

const Home = (props) => {
    let name = "name"
    useEffect(() => {
        props.setIndex(0);
    });
    let topAreaStyle = {height: "10%"}

    return (
        <div className={"homeCont"}>
            <div style={topAreaStyle} className={"topArea"}>
                <div className={"firstRowCont"}>
                    <h2 style={{width: "400px"}}>Buen día, {name}</h2>
                    <div className={"search"}>
                        <button className={"searchBtn"} type={"button"}>Buscar</button>
                        <input type="text" id="search" name="searchbar" placeholder={"Buscar"}/>
                    </div>
                </div>
            </div>
            <div className={"homeContent"}>
                <div className={"homeColumnBox"}>
                    <div className={"homeColumn"}>

                    </div>
                    <div className={"homeColumn"}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;