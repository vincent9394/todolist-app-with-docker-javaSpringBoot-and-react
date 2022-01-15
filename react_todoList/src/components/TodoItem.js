import "../style/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../apis/todos";
import { CloseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { updateTodoList, deleteTodoList } from "../store/actions/TodoAction";
import ModalItem from "./ModalItem";

const TodoItem = ({ todo }) => {
  const newText = todo.done ? <del>{todo.text}</del> : todo.text;
  const dispatch = useDispatch();

  const updateStatus = () => {
    updateTodo({ id: todo.id, done: !todo.done }).then((response) =>
      dispatch(updateTodoList(response))
    );
  };

  const deleteItem = () => {
    deleteTodo(todo.id).then(() => dispatch(deleteTodoList(todo.id)));
  };

  return (
    <div className="box">
      <span onClick={updateStatus}> {newText} </span>

      <CloseOutlined fill="blue" onClick={deleteItem} className="tool" />
      <ModalItem todo={todo} />
    </div>
  );
};

export default TodoItem;
