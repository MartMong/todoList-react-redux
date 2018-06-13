const initialState = {
    text:'sleep'
  }

export function todos(state=initialState,action){
    switch(action.type){
        case 'add_todo':
        console.log(state)
            return [
                ...state,{
                    text:action.text
                }
                ];
        default:
            return state;
    }
}