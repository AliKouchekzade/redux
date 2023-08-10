import { Provider } from "react-redux";

import CakeContianner from "./components/cakeContainer";
import IcecreamContainer from "./components/icecreamContianer";
import UseContianer from "./components/userContianer";
import { store } from "./features/store";
import Counter from "./components/counter";
import ToDoList from "./components/todos/todoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContianner />
        <IcecreamContainer />
        <UseContianer /> */}
        {/* <Counter /> */}
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
