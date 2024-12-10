export const initialState = {
  todoList: [],
};

const TodoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.item],
      };

    case "REMOVE_USER":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };

    case "EDIT_USER":
      const updatedUser = action.payload;
      const modUser = state.todoList.map((item) => {
        if (item.id === updatedUser.id) {
          return updatedUser;
        }
        return item;
      });
      return {
        ...state,
        todoList: modUser,
      };

    default:
      return state;
  }
};

export default TodoReducer;
