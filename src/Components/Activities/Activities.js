import React from "react";

const Activities = () => {
    return (
        <div className={"activities"}>
            <div className={"topArea"}>
                <div className={"firstRowCont"}>
                    <div className={"filt"}>
                        <h2>Actividades</h2>
                        <img alt={"filter"} src={require('../../Assets/filter.png')}/>
                        <p>Filtrar</p>
                    </div>
                    <div className={"search"}>
                        <button className={"searchBtn"} type={"button"}>Buscar</button>
                        <input type="text" id="search" name="searchbar" placeholder={"Buscar"}/>
                    </div>
                </div>
                <div className={"categoryCont"}>
                    <div className={"categoryBox"}>
                        <h4>Noticias</h4>
                    </div>
                    <div className={"categoryBox"}>
                        <h4>Blogs</h4>
                    </div>
                    <div className={"categoryBox"}>
                        <h4>Recomendaciones</h4>
                    </div>
                </div>
            </div>
            <div className={"contentBox"}>

            </div>
        </div>
    );
}

export default Activities;