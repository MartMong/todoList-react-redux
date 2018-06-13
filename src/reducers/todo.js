const initialState = {
    todoList:[]
  }

export function todos(state=initialState,action){
    switch(action.type){
        case 'add_todo':
        let { todoList } = state;
        todoList.push(action.payload)
            // return [
            //     ...state,{
            //         todoList:[...state,action.payload]
            //     }
            //     ];
            return { ...state, todoList: action.payload }
        default:
            return state;
    }
}