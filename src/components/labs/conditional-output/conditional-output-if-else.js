import React from "react";

const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
        return(<h2>Welcome with If Else</h2>);
    } else {
        return (<h2>Please login with If Else</h2>);
    }
};

export default ConditionalOutputIfElse;