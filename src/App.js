import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContianner from "./components/cakeContainer";
import IcecreamContainer from "./components/icecreamContianer";
import UseContianer from "./components/userContianer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContianner />
        <IcecreamContainer />
        <UseContianer />
      </div>
    </Provider>
  );
}

export default App;
