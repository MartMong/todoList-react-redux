export const addTodo = text =>(
    {
            type:'add_todo',    
            payload:text
  
    
    });

export const editTodo = (id,text)=>(
    {
        type:'edit_todo',
            payload:{
                text,
                id
            }
    }
);

export const offShow = () =>(
    {
        type:'off_show'
    }
)