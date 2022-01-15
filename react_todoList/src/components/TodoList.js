import TodoGroup from "./TodoGroup";
import "../style/TodoList.css";
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPage } from "../apis/todos";
import { initTodoList } from "../store/actions/TodoAction";
import { Layout } from "antd";

const { Content } = Layout;
const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPage(0, 5).then((response) => dispatch(initTodoList(response)));
  });

  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          {" "}
          <div>
            <p>
              Todo List <TodoGenerator />
            </p>
          </div>
          <div>
            <TodoGroup />
          </div>
        </div>
      </Content>
    </>
  );
};

export default TodoList;
