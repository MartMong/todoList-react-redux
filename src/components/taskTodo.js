import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class TaskTodo extends Component{
    constructor(props){
        super(props);
        this.state={
            showEdit:false
        }
    }

    editList(id){
        console.log('in edit');
        this.setState({showEdit:true});
    }

    renderList(){
        var { todoList } = this.props.todo;
        return todoList.map((msg, index) => {
            return (
                <li className="collection-item" key={index}  id = {index}  >
                    {msg}
                    <button onClick = {()=>{this.props.delete_todo(index)}}  >
                        delete
                    </button>
                    <button onClick = {()=>{this.editList(index)}}  >
                        edit
                    </button>

                </li>
            );
        });
    }
    render(){
            return (
            <div>
                <ul className = "collection">
                    {this.renderList()}
                </ul>
                {this.state.showEdit?<AddEditBlock/>:null}
            </div>
            );
         
    }


   
}

const AddEditBlock = () => {
    return(
        <form  > 
            <label>edit todo detail</label>
            <input id = "todoEdit" />
        </form>

    )
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