import { useReducer } from 'react';
import './App.css';
import Input from './components/input';
import Head from './components/head';
import Items from './components/todo-items';
import Welcome from './components/welcome';
import TodoItems from './store/TodoItems';

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [...currTodoItems,
      {
        data
          : action.payload.itemName,
        date: action.payload.itemDate,
      }];
  }
  else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(item => item.data !== action.payload.itemName);
  }
  else {
    newTodoItems = currTodoItems;
  }
  return newTodoItems;
}

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      }
    };
    dispatchTodoItems(newItemAction);
  }

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName
      }
    };
    dispatchTodoItems(deleteItemAction);
  }
  
  return (
    <>
      <TodoItems.Provider value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
      <Head></Head>
      <Input></Input>
      {todoItems?.length === 0 && <Welcome></Welcome>}
      <Items></Items>
      </TodoItems.Provider>
    </>
  )
}

export default App;