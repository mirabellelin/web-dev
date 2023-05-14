import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
    <div>
        <div className="row">
            <div className="d-flex align-items-center mb-1">
                <div className="input-group rounded-pill border align-items-center px-3 bg-white">
                    <span className="" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="search" className="form-control border-0 rounded wd-input-no-outline" placeholder="Search Tuiter"
                    aria-label="Search" aria-describedby="search-addon" />
                </div>
                <div className="ms-auto p-2 text-primary">
                    <a href="#">
                        <i className="fa fa-solid fa-cog"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <ul className="nav mb-2 nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="for-you.html">For you</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="trending.html">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="news.html">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="sports.html">Sports</a>
            </li>
            <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <div className="card d-flex align-content-end">
            <img src="https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/12709.jpg?itok=RByMHmpc"
                     className="card-img" width="506px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h2 className="card-title text-white px-2 ">Summer in Hawaii</h2>
            </div>
        </div>
        <PostSummaryList/>
    </div>
    );
};


export default ExploreComponent;