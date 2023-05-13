import React from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else";
import ConditionalOutputInline from "./conditional-output-inline";

const ConditionalOutput = () => {
    return(
        <>
            <h3>Conditional Output</h3>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
        </>
    )
};
export default ConditionalOutput;