import tuits from '../data/tuits.json';
import React from "react";

const TuitReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    username: "cuteQuokka"
                },
                handle: "kuoqqa",

            avatarImage: "https://images.unsplash.com/photo-1596543570665-a34c7aeb1da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
                stats: {
                    retuits: 111,
                    likes: 222,
                    replies: 333
                }
            }
            return [
                newTuit,
                ...state,
            ];
        case 'delete-tuit':
            return state.filter((tuit) => tuit._id !== action.tuit._id);
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        default:
            return tuits;
    }
};
export default TuitReducer;