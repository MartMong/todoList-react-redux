const initialState = {
    todoList:[]
  }

export function todos(state=initialState,action){
    // console.log(typeof state.todoList);
    switch(action.type){
        case 'add_todo':
            let todoList = state.todoList;
            console.log(todoList)
         
            todoList.push(action.payload);
            return { ...state, todoList };
        default:
            return state;
    }
}