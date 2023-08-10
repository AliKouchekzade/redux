import { Provider } from "react-redux";

import CakeContianner from "./components/cakeContainer";
import IcecreamContainer from "./components/icecreamContianer";
import UseContianer from "./components/userContianer";
import { store } from "./features/store";
import Counter from "./components/counter";
import ToDoList from "./components/todos/todoList";
import ToDoForm from "./components/todos/todoForm";
import CompleteTodos from "./components/todos/totalComplete";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContianner />
        <IcecreamContainer />
        <UseContianer /> */}
        {/* <Counter /> */}
        <ToDoForm />
        <ToDoList />
        <CompleteTodos />
      </div>
    </Provider>
  );
}

export default App;
