import React from "react";
import Header from "../NavBar Header/Header";

const Education = (props) => {
    return (
        <div>
            <Header windowSize={props.windowSize}/>
            <div className={"education"}>
                <div className={"topArea"}>
                    <h2>Educación</h2>
                    <input type="text" id="search" name="searchbar" placeholder={"Buscar blog"}/>
                </div>
                <div className={"categoryCont"}>
                    <div className={"categoryBox"}>
                        <img alt={"Category Icon"} src={require('../../Assets/teaching.png')}/>
                        <h4>Blogs</h4>
                    </div>
                    <div className={"categoryBox"}>
                        <img alt={"Category Icon"} src={require('../../Assets/teaching.png')}/>
                        <h4>Blogs</h4>
                    </div>
                    <div className={"categoryBox"}>
                        <img alt={"Category Icon"} src={require('../../Assets/teaching.png')}/>
                        <h4>Blogs</h4>
                    </div>
                    <div className={"categoryBox"}>
                        <img alt={"Category Icon"} src={require('../../Assets/teaching.png')}/>
                        <h4>Blogs</h4>
                    </div>
                </div>
                <div className={"contentBox"}>
                    <div className={"blogCard"}>
                        <h2>Blog</h2>
                    </div>
                    <div className={"blogCard"}>
                        <h2>Blog</h2>
                    </div>
                    <div className={"blogCard"}>
                        <h2>Blog</h2>
                    </div>
                    <div className={"blogCard"}>
                        <h2>Blog</h2>
                    </div>
                    <div className={"blogCard"}>
                        <h2>Blog</h2>
                    </div>
                    <div className={"blogCard"}>
                        <h2>Blog</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;