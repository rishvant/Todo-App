import "../styles/input.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import TodoItems from "../store/TodoItems";

const Input = () => {
    // const [todoItem, setTodoItem] = useState("");
    // const [date, setDate] = useState("");
    const { addNewItem } = useContext(TodoItems);
    const todoName = useRef();
    const todoDate = useRef();

    // const nameChange = (event) => {
    //     setTodoItem(event.target.value);
    // }

    // const dateChange = (event) => {
    //     setDate(event.target.value);
    // }

    const handleButtonClick = (event) => {
        const toDoName = todoName.current.value;
        const toDoDate = todoDate.current.value;
        todoName.current.value = "";
        todoDate.current.value = "";
        addNewItem(toDoName, toDoDate);
        event.preventDefault();
    }

    return (
        <form className="input" onSubmit={handleButtonClick}>
            <input type="text" ref={todoName} className="todo" placeholder="Enter Todo Here" />
            <input type="date" ref={todoDate} className="date" />
            <button type="submit" className="btn btn-success add-btn"><MdOutlineAddComment className="add-icon" /></button>
        </form>
    )
    
}

export default Input;