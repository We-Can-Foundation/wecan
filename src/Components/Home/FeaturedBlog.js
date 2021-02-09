import React from "react";
import {Link} from "react-router-dom";

const FeaturedBlog = (props) => {
    let blog = props.content;
    return (
        <Link to={`/blogs/${blog.id}`}  style={{ textDecoration: 'none' }}>
            <div className={"featuredBlog"} onClick={() => props.setBlog(blog)}>
                <img alt={"blog"} src={blog.images[0]}/>
                <div className={"featuredBlogContent"}>
                    <h3>{blog.title}</h3>
                    <p>{blog.start}</p>
                </div>
            </div>
        </Link>

    )
}

export default FeaturedBlog;