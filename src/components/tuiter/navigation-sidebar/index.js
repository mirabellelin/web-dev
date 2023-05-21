import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    active = 'explore'
) => {
    return (
        <>
            <div>
                <a className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fab fa-twitter"></i></a>

                <Link to="/tuiter" className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`}>
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-home"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Home</div>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`}>
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-hashtag"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Explore</div>
                </Link>
                <a className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`} href="../notifications">
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-bell"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Notifications</div></a>

                <a className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`} href="../messages">
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-envelope"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Messages</div></a>

                <a className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`} href="../bookmarks">
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-bookmark"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Bookmarks</div></a>

                <a className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`} href="../lists">
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-list"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Lists</div></a>

                <a className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`} href="../profile">
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-user"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">Profile</div></a>

                <a className={`list-group-item list-group-item-action d-flex align-items-baseline 
                    ${active === 'home' ? 'active' : ''}`} href="../more">
                    <div className="bg-black"></div>
                    <i className="fa fa-solid fa-minus-circle"></i>
                    <div className="d-xl-block d-lg-none d-none px-1">More</div></a>
            </div>

            <div className="d-grid mt-2">
                <a href="/tuit"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>
    )}

export default NavigationSidebar;

//React.js function components can only return a single HTML element