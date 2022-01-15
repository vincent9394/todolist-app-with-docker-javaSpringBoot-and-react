import React, { useState } from "react";
import { Modal } from "antd";
import { FormOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import api from "../apis/api.js";
import { updateTodo } from "../apis/todos.js";
import { updateTodoList } from "../store/actions/TodoAction.js";

const ModalItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState(todo.text);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateStatus = () => {
    const updated = { ...todo, text: text };

    updateTodo(updated).then((response) => dispatch(updateTodoList(response)));

    setIsModalVisible(false);
  };

  return (
    <>
      <FormOutlined onClick={showModal} className="tool" />
      <Modal
        title="Edit Todo"
        visible={isModalVisible}
        onOk={updateStatus}
        onCancel={handleCancel}
      >
        <input
          size="61"
          onChange={(event) => setText(event.target.value.toString())}
          defaultValue={todo.text}
        />
      </Modal>
    </>
  );
};

export default ModalItem;
