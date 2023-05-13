const TodoItem = ({
                      todo = {
                          done: true,
                          title: 'Buy milk',
                          status: 'COMPLETED'
                      }
                  }) => {
    return (
        <li>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;

// Things to note when porting JavaScript functions to React.js components:
// ● Prefer object destructors as a single parameter instead of a list of parameters
// ● Provide default values for the parameters and/or parameter objects. This helps testing as a standalone
// components
// ● Remove or replace unnecessary string concatenation syntax such as back ticks
// ● Remove or refactor any use of jQuery symbols such as $
// ● Remove or refactor unnecessary string expressions such as ${}