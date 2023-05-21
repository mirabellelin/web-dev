import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="row my-1">
            <div className="d-flex align-items-center col">
                <i className=" far fa-comment me-1 "></i>
                <div>{tuit.stats.comments}</div>
            </div>
            <div className="d-flex align-items-center col">
                <i className=" fas fa-retweet me-1 "></i>
                <div>{tuit.stats.retuits}</div>
            </div>
            <div onClick={likeTuit} className="d-flex align-items-center col">
                    {tuit.liked && <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>}
                    {!tuit.liked && <i className="far fa-heart me-1"></i>}
                    {tuit.stats && tuit.stats.likes}
            </div>
            <div className="col">
                <i className=" fas fa-external-link-alt me-1 "></i>
            </div>
        </div>




);
}
export default TuitStats;