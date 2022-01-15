import { ActionTypes } from "./Constants";

const initState = { todoList: [] };
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODOLIST_ITEM:
      return {
        todoList: {
          ...state.todoList,
          content: [action.payload, ...state.todoList.content],
        },
      };
    // return { todoList: [...state.todoList.content, action.payload] };

    case ActionTypes.UPDATE_TODOLIST_ITEM:
      const newTodoList = state.todoList.content.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload);

          return action.payload;
        }

        return item;
      });

      // const tmp = {};
      // tmp.a = 123;
      // tmp.b = '124';

      // const tmp2 = {...tmp};

      return { todoList: { ...state.todoList, content: newTodoList } };
    // const tmp3 = {  ...state.todoList, newTodoList };

    // console.log(state);
    // console.log(tmp3);

    // return {...state};

    case ActionTypes.DELETE_TODOLIST_ITEM:
      const filteredList = state.todoList.content.filter((item) => {
        return item.id !== action.payload;
      });
      return { todoList: { ...state.todoList, content: filteredList } };

    case ActionTypes.INIT_TODOLIST:
      return { todoList: action.payload };

    default:
      return state;
  }
};
export default todoReducer;
