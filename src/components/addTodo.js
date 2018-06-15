import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todos';
class AddTodoComp extends Component{

    
    onSubmit(event){

        console.log(this.props)

        event.preventDefault();
        var whatTodo=(document.getElementById("todoList").value);
        this.props.add_todo(whatTodo);
        document.getElementById("todoList").value="";
    }

    render(){
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

const mapDispatchToProps  = (dispatch) => ({
    add_todo:text=>dispatch(addTodo(text))
})


export default connect(mapStateToProps,mapDispatchToProps)(AddTodoComp);
