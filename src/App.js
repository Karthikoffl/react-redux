import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setUserAction } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux</h1>

      <h1>Counter: {counter}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      {!user && (
        <button
          onClick={() => dispatch(setUserAction({ id: 1, name: "Karthik" }))}
        >
          Set User
        </button>
      )}

      {user && <p>{user.name}</p>}
    </div>
  );
}

export default App;
