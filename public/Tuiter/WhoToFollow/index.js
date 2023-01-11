
import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
    <div class="container">
<!--        <div class="row mt-3 mb-3"> -->
<!--            <div class="col-4 d-none d-lg-block">-->
                <div>
                    <ul class="list-group">
                        <li class="list-group-item "><b>
                            <div class="fw-bold">Who to follow</div>
                        </b></li>
                        ${who.map(WhoToFollowListItem).join('')}
        </ul>
<!--            </div>-->
<!--        </div>-->
    </div> 
`)}


export default WhoToFollowList;