import React, { Component } from 'react';
import {connect} from 'react-redux';
class Edit extends Component {

    render() {
        
        // console.log(this.props.todo.todoList[this.props.status.selectedItem])
        return (    
            <form onSubmit={(event)=>{
                event.preventDefault();
     
                var text =(document.getElementById("editTextField").value);
                this.props.edit_todo(this.props.status.selectedItem,text);
                this.props.off_show()
                document.getElementById("editTextField").value="";
            }}>
                <label>Change goal :::   </label>
                <input id="editTextField"  />
            </form>


        );
    }
}

const mapStateToProps = (state)=> (
    {
        status:state.status,
        todo:state.todo
    })

;

const mapDispatchToProps  = (dispatch) => {
    return{
        edit_todo: (id,text) =>
        dispatch({
            type:'edit_todo',
            payload:{
                text,
                id
            }
        }),
        off_show:()=>
        dispatch({
            type:'off_show'
        })
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Edit);