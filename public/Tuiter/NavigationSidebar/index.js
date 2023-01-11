const NavigationSidebar = () => {
    return (`
        <div class="list-group">
            <a class="list-group-item" href="../home.html">
                <i class="fab fa-twitter"></i></a>
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../home.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-home"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Home</div></a>
           
           <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../explore.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-hashtag"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Explore</div></a>
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../notifications.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-bell"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Notifications</div></a>
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../messages.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-envelope"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Messages</div></a>
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../bookmarks.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-bookmark"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Bookmarks</div></a>            
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../lists.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-list"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Lists</div></a>            
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../profile.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-user"></i>
            <div class="d-xl-block d-lg-none d-none px-1">Profile</div></a>
            
            <a class="list-group-item list-group-item-action d-flex align-items-baseline" href="../more.html">
           <div class="bg-black"></div>
            <i class="fa fa-solid fa-minus-circle"></i>
            <div class="d-xl-block d-lg-none d-none px-1">More</div></a>            
        </div>
        
        <div class="d-grid mt-2">
            <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
        </div>
`)
}

export default NavigationSidebar;