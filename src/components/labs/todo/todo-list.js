import TodoItem from "./todo-item";
import todos from "./todo.json";

const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;