const initialState = {
    todoList:[],

  }

export function todos(state=initialState,action){
    // console.log(typeof state.todoList);
    switch(action.type){
        case 'add_todo':
            var todoList = state.todoList;
            console.log(todoList)
         
            todoList.push(action.payload);
            return { ...state, todoList };
        case 'delete_todo':
            var todoList = state.todoList;
            todoList.splice(action.payload,1);
            return {...state,todoList};
        default:
            return state;
    }
}