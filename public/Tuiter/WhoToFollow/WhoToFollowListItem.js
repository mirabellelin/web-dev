const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <img src= ${who.avatarIcon} class="rounded-circle" width="45px" height="45px" alt="">
            <div class="ms-2 me-auto">
                <div class="fw-bold "> ${who.userName} </div>
                @ ${who.handle} 
            </div>
            <button class="btn btn-primary rounded-pill">Follow</button>
            </li>
`);}

export default WhoToFollowListItem;