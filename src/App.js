import "./App.css";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <TasksList />
    </Provider>
  );
}

export default App;
