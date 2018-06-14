const initialState = {
    showStatus:false,
    selectedItem:1
}


export function statusEdit(state =initialState  , action){
    console.log(action)
    switch(action.type){
        case 'on_show':
            return {...state,
                showStatus:true,
                selectedItem:action.payload.id
            }
        case 'off_show':
            return {
                ...state,
                showStatus:false,
                selectedItem:null
            }
        default:
            return state;
    }
}