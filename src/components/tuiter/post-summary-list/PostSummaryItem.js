import React from "react";

const PostSummaryItem = (
    {
        post = {
            topic: "Web Development",
            userName: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page " +
                "Applications or SPAs",
            image: "../../../images/react-blue.png"
        }
    }) => {
    return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="me-auto px-1">
            <div className="text-muted">{post.topic}</div>
            <div className="d-flex align-items-center">
                <div className="float-start fw-bold pe-1">{post.userName}</div>
                <i className="float-start fa fa-check-circle px-1"></i>
                <div className="text-muted">- {post.time}</div>
            </div>
            <div className="fw-bold">{post.title}</div>
            <div className="text-muted">{post.tweets}</div>
        </div>
        <img src={post.image}
             className="rounded-3" width="90px"/>
    </li>
    );
};

export default PostSummaryItem;