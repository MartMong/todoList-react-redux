import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todos';
class AddTodoComp extends Component{

    
    onSubmit(event){
        event.preventDefault();
        var whatTodo=(document.getElementById("todoList").value);
        this.props.add_todo(whatTodo);
    }

    render(){
        
        console.log(this.props)

        return(
            <div>
                <form onSubmit  = {this.onSubmit.bind(this)} >
                    <h3>Todo List</h3>
                    <label>What you want to do?</label>
                    <input 
                        type="text"
                        id = "todoList"     
                    />
                </form>
            </div>
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
                add_todo: (whatTodo)=>
                dispatch({
                    type:'add_todo',    
                    text:whatTodo
          
                })
            }
        };

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoComp);
