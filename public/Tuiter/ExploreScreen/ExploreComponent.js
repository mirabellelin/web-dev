import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <!-- search field and cog -->
        <div class="row">
            <div class="d-flex align-items-center mb-1">
                <div class="input-group rounded-pill border align-items-center px-3 bg-white">
                    <span class="" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                    <input type="search" class="form-control border-0 rounded wd-input-no-outline" placeholder="Search Tuiter"
                    aria-label="Search" aria-describedby="search-addon" />
                </div>
                <div class="ms-auto p-2 text-primary">
                    <a href="#">
                        <i class="fa fa-solid fa-cog"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- tabs -->
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <!-- image with overlaid text -->
        <div class="card d-flex align-content-end">
            <img src="https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/12709.jpg?itok=RByMHmpc"
                     class="card-img" width="506px">
            <div class="card-img-overlay d-flex flex-column justify-content-end">
                <h2 class="card-title text-white px-2 ">Summer in Hawaii</h2>
            </div>
        </div>
        
        ${PostSummaryList()}
        
`);
}

export default ExploreComponent;