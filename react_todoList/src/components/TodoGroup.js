import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { initTodoList } from "../store/actions/TodoAction";
import { getPage } from "../apis/todos";
import { Pagination } from "antd";

const TodoGroup = () => {
  const todos = useSelector((state) => {
    return state.todoList;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {todos?.content?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        total={50}
        pageSizeOptions="1"
        showLessItems
        onChange={(value) => {
          getPage(value - 1, 5).then((response) =>
            dispatch(initTodoList(response))
          );
          console.log(value);
        }}
      />
    </>
  );
};

export default TodoGroup;
