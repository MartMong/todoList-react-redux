import React,{Component} from 'react';
import {connect} from 'react-redux';

class TaskTodo extends Component{
    renderList(){
        
        var { todoList } = this.props.todo;
        return todoList.map((msg, index) => {
            return (
                <li className="collection-item" key={index}>
                    {msg}
                </li>
            );
        });
    }
    render(){
        
        return(
            <div>
                taskList
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = (state)=>(

    {
        todo:state.todo
    }
);


// const mapDispatchToProps  = (dispatch) => {
//     return{
//         add_todo: (whatTodo)=>
//         dispatch({
//             type:'add_todo',    
//             text:whatTodo
  
//         })
//     }
// };

export default connect(mapStateToProps)(TaskTodo); 