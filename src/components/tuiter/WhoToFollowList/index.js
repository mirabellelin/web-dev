import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item "><b>
                    <div className="fw-bold">Who to follow</div>
                </b></li>
                {who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </ul>
        </div>
    )
}


export default WhoToFollowList;