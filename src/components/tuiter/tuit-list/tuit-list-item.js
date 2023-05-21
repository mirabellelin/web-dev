import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({

    tuit = {
        id: "123",
        topic: "Web Development",
        postedBy: {},
        liked: true,
        verified: false,
        handle: "ReactJS",
        time: "2h",
        title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        attachments: {},
        logoImage: "../../../images/react-blue.png",
        avatarImage: "../../../images/react-blue.png",
        stats: {        }
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({ type: "delete-tuit", tuit});
    };
    return (
        <div className="list-group-item d-flex">

            <div>
                <img src={tuit.avatarImage} className="rounded-circle" width="45px" height="45px" alt=""/>
            </div>

            <div className="px-3 d-flex flex-column flex-fill">

                <div className="d-flex align-items-center">
                    <div className="fw-bold pe-1"> {tuit.postedBy.username} </div>
                    <div className="text-muted">@{tuit.handle}</div>
                    <i className="fa fa-check-circle px-1" hidden={!tuit.verified} ></i>
                </div>
                <div> {tuit.tuit} </div>
                <div>
                    {tuit.attachments && tuit.attachments.video && (
                        <iframe
                            className="wd-rounded-corners-20 w-100 py-2"
                            height="315"
                            src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                            title="YouTube video player"
                            allow="fullscreen"
                        />
                    )}
                    {tuit.attachments && tuit.attachments.image &&  (
                            <img src={tuit.attachments.image} className="wd-rounded-corners-20 w-100 py-2"
                                 height="315px" alt="tuitImage"/>
                        )}
                </div>

                <TuitStats tuit={tuit}/>
            </div>
            <div>
                <i onClick={() => deleteTuit(tuit)}
                   className="btn fas fa-times p-0"></i>
            </div>

        </div>
    );
}

export default TuitListItem;