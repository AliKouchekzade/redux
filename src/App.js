import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContianner from "./components/cakeContainer";
import IcecreamContainer from "./components/icecreamContianer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContianner />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
