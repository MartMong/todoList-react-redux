import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editTodo,offShow} from '../actions/todos';
class Edit extends Component {

    render() {
        
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

const mapDispatchToProps  = (dispatch) => (
    {
        edit_todo:(id,text)=>dispatch(editTodo(id,text)),
        off_show:()=>dispatch(offShow())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Edit);