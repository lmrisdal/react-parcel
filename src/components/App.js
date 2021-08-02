import Todo from "./Todo";
import Backdrop from "./Backdrop";
import { memo } from "React";

const App = memo((props) => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="elative py-3 sm:max-w-xl sm:mx-auto">
        <Backdrop />
        <h1>My Todos</h1>
        <Todo {...props}/>
      </div>
    </div>
  );
});

export default App;
