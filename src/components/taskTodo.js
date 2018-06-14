import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class TaskTodo extends Component{
    editList(id){
        console.log(id)
    }

    renderList(){
        var { todoList } = this.props.todo;



        return todoList.map((msg, index) => {
            
            // let boundItemClick = this.editList.bind(this,todoList);
            
            return (
                <li className="collection-item" key={index}  id = {index}  >
                
                    {msg}
                    <button onClick = {()=>{this.editList(index)}}  >
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