import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item "><b>
                    <div className="fw-bold">Who to follow</div>
                </b></li>
                {
                    who.map(who => {
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