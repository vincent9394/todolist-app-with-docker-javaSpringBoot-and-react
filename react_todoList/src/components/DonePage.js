import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Layout } from "antd";

const { Content } = Layout;

const DonePage = () => {
  const doneList = useSelector((state) =>
    state.todoList.filter((item) => item.done)
  );

  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <div>
          <h2>Done Todo List</h2>
          {doneList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </Content>
    </>
  );
};

export default DonePage;
