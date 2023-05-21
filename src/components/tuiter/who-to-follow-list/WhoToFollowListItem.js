import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <img src={who.avatarIcon} className="rounded-circle float-start" width="45px" height="45px" alt=""/>
                <div className="ms-2 me-auto">
                    <div className="fw-bold "> {who.userName} </div>
                    @ {who.handle}
                </div>
                <button className="btn btn-primary rounded-pill ">Follow</button>
        </div>
);}

export default WhoToFollowListItem;