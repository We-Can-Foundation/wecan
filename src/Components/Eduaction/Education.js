import React from "react";

const Education = () => {
    return (
            <div className={"education"}>
                <div className={"topArea"}>
                    <div className={"firstRowCont"}>
                        <div className={"filt"}>
                            <h2>Educación</h2>
                            <img alt={"filter"} src={require('../../Assets/filter.png')}/>
                            <p>Filtrar</p>
                        </div>
                        <div className={"search"}>
                            <button className={"searchBtn"} type={"button"}>Buscar</button>
                            <input type="text" id="search" name="searchbar" placeholder={"Buscar"}/>
                        </div>
                    </div>
                    <div className={"categoryCont"}>
                        <div className={"categoryBox news"}>
                            <img alt={"Category Icon"} src={require('../../Assets/news.png')}/>
                            <h4>Noticias</h4>
                        </div>
                        <div className={"categoryBox blogCat"}>
                            <img alt={"Category Icon"} src={require('../../Assets/blogs.png')}/>
                            <h4>Blogs</h4>
                        </div>
                        <div className={"categoryBox tips"}>
                            <img alt={"Category Icon"} src={require('../../Assets/tips.png')}/>
                            <h4>Recomendaciones</h4>
                        </div>
                    </div>
                </div>
                <div className={"contentBox"}>
                    <div className={"blogCard"}>
                        <img alt={"Blog"} src={require('../../Assets/blogImg.png')} />
                        <div className={"resumenBlog"}>
                            <p>Andy Vane Mendez, Agosto 2020</p>
                            <h2>Blog 01</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. </p>
                            <button className={"readMoreBtn"} type={"button"}>Leer más</button>
                        </div>
                    </div>
                    <div className={"blogCard"}>
                        <img alt={"Blog"} src={require('../../Assets/blogImg.png')} />
                        <div className={"resumenBlog"}>
                            <p>Estefanía Hernández, Agosto 2020</p>
                            <h2>Blog 02</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. </p>
                            <button className={"readMoreBtn"} type={"button"}>Leer más</button>
                        </div>
                    </div>
                    <div className={"blogCard"}>
                        <img alt={"Blog"} src={require('../../Assets/blogImg.png')} />
                        <div className={"resumenBlog"}>
                            <p>Fer Schimel, Agosto 2020</p>
                            <h2>Blog 03</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. </p>
                            <button className={"readMoreBtn"} type={"button"}>Leer más</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Education;