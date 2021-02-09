import React, {useEffect} from "react";
import useWindowSize from "../../useWindowSize";
import {Link} from "react-router-dom";
import BlogList from './BlogList'

const Education = (props) => {

    useEffect(() => {
        props.setIndex(1);
    });

    let height = useWindowSize().height;
    let width = useWindowSize().width;
    let topAreaStyle = {height: "20%"}
    let contentBoxStyle = {height: "70%"}
    let contentTitle = "";

    switch (props.category) {
        case 0:
            contentTitle = <h2 style={{color: '#5681BF'}}>Noticias</h2>;
            break;
        case 1:
            contentTitle = <h2 style={{color: '#CB4242'}}>Blogs</h2>;
            break;
        case 2:
            contentTitle = <h2 style={{color: '#E17B12'}}>Recomendaciones</h2>;
            break;
        default:
            contentTitle = "";
            break;
    }

    if(height < 750 && width < 500){
        topAreaStyle.height = "20%";
        contentBoxStyle.height = "60%";
    } else if( height < 800 && height > 700) {
        topAreaStyle.height = "20%";
        contentBoxStyle.height = "70%";
    }

    return (
            <div className={"education"}>
                <div style={topAreaStyle} className={"topArea"}>
                    <div className={"firstRowCont"}>
                        <div className={"filt"}>
                            <h2>Educación</h2>
                            {/*
                            <img alt={"filter"} src={require('../../Assets/filter.png')}/>
                            <p>Filtrar</p>
                            */}
                        </div>
                        {/*<div className={"search"}>
                        <button className={"searchBtn"} type={"button"}>Buscar</button>
                        <input type="text" id="search" name="searchbar" placeholder={"Buscar"}/>
                        </div>*/
                        }
                    </div>
                    <div className={"categoryCont"}>
                        {/*
                            <div onClick={() => props.setCategory(0)} className={"categoryBox news"}>
                                <img alt={"Category Icon"} src={require('../../Assets/news.png')}/>
                                <h4>Noticias</h4>
                            </div>
                            <div onClick={() => props.setCategory(2)} className={"categoryBox tips"}>
                                <img alt={"Category Icon"} src={require('../../Assets/tips.png')}/>
                                <h4>Recomendaciones</h4>
                            </div>
                         */}
                        <div onClick={() => props.setCategory(1)} className={"categoryBox blogCat"}>
                            <img alt={"Category Icon"} src={require('../../Assets/blogs.png')}/>
                            <h4>Blogs</h4>
                        </div>

                    </div>
                </div>
                <div style={contentBoxStyle} className={"contentBox"}>
                    <h2 style={{color: '#cb4242'}}>Blogs</h2>
                    {BlogList.map((item, i) => {
                        return (
                            <div className={"blogCard"} key={i}>
                                <img alt={"Blog"} src={item.images[0]} />
                                <div className={"resumenBlog"}>
                                    <p>{item.author}, {item.date}</p>
                                    <h2>{item.title}</h2>
                                    <p>{item.start}</p>
                                    <Link to={`/blogs/${item.id}`}>
                                        <button className={"readMoreBtn"} type={"button"} onClick={() => props.setBlog(item)}>Leer más</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    );
}

export default Education;