import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContianner from "./components/cakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContianner />
      </div>
    </Provider>
  );
}

export default App;
