import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";

function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <div>
                <Link to="/hello">
                    Hello
                </Link> |
                <Link to="/tuiter">
                    Tuiter
                </Link>
                <ReduxExamples/>
            </div>

            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <h3>TodoList</h3>
            <TodoList/>

        </div>
    );
}
export default Labs;