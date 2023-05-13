import React from "react";
import './index.css';

const Classes = () => {
    const color = 'blue';
    const dangerous = false;

    return(
        <div>
            <h2>Classes</h2>

            {/*original with static classes*/}
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow background</div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                Blue background</div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">
                Red background</div>

            {/*dynamic class*/}
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background
            </div>

            {/*conditionally choose classes*/}
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
        </div>
    )
};
export default Classes;