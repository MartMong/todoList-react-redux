import React, { Component } from 'react';

class AddTodo extends Component{

    onSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit  = {this.onSubmit.bind(this)} >
                    <h3>Todo List</h3>
                    <label>What you want to do?</label>
                    <input 
                        type="text"
                            
                    />
                </form>
            </div>
        );
        
    }
}

export default AddTodo;
