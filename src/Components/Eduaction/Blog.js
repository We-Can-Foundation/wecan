import React from "react";
import './blogStyle.css';
import {Link, useHistory, useParams} from 'react-router-dom';

const Blog = (props) => {

    let navigation = useHistory();

    return (
        <div className={"blogCont"}>
            <header>
                <button className={"backFromBlog"} onClick={() => navigation.goBack()}>Regresar</button>
                <div>{/*Compartir*/}</div>
            </header>
            <div className={"secondTopBar"}>{props.blogs.author}, {props.blogs.date}</div>
            <h1>{props.blogs.title}</h1>
            <p>{props.blogs.start}</p>
            {props.blogs.body.map(paragraph => {
                return <p>{paragraph}</p>
            })}
            {props.blogs.images.map((image, i) => {
                return <img alt={`${props.blogs.title}, ${i}`} src={image}/>
            })}
            <footer style={{padding: "20px"}}>
                <p className={"blogCopy"}>&copy; We Can Foundation {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Blog;