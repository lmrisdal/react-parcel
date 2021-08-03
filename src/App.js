import Todo from "./components/Todo";
import { memo } from "React";

const App = memo((props) => {
  return (
    <div>
      <div>
        <h1>My Todos</h1>
        <Todo text="Learn React"/>
        <Todo text="Master React"/>
      </div>
    </div>
  );
});

export default App;
