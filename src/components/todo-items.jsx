import "../styles/items.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext } from "react";
import TodoItems from "../store/TodoItems";

const Items = () => {
    const { todoItems, deleteItem } = useContext(TodoItems);

    return (
        <div className="container text-center">
            {todoItems?.map(item => (
                <div className="row">
                    <div className="col-4 item">{item.data}</div>
                    <div className="col-4 item-date">{item.date}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger delete-btn" onClick={()=>deleteItem(item.data)}><RiDeleteBinLine className="delete-icon" /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items;