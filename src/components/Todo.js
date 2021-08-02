import { memo } from "React";

const Todo = memo(({message}) => {
  return (
    <div className="">
      <h2>{message}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
});

export default Todo;