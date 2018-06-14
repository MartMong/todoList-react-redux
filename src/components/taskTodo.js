import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class TaskTodo extends Component{
    deleteList(id){
        this.props.delete_todo(id);
    }

    renderList(){
        var { todoList } = this.props.todo;



        return todoList.map((msg, index) => {
            
            return (
                <li className="collection-item" key={index}  id = {index}  >
                
                    {msg}
                    <button onClick = {()=>{this.deleteList(index)}}  >
                        edit
                    </button>

                </li>
            );
        });
    }
    render(){
        
        return(
            <ul className = "collection">
                {this.renderList()}
            </ul>
                
            
        );
    }
}
const mapStateToProps = (state)=>(

    {
        todo:state.todo
    }
);


const mapDispatchToProps  = (dispatch) => {
    return{
        delete_todo: (id)=>
        dispatch({
            type:'delete_todo',    
            payload:id
  
        })
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskTodo); 