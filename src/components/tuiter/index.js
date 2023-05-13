import React from "react";
import NavigationSidebar from "./NavigationSidebar/index";
import WhoToFollowList from "./WhoToFollowList/index";

function Tuiter() {
    return (
        <>

            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
        </>
    );
}
export default Tuiter;