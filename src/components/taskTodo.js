import React,{Component} from 'react';
import {connect} from 'react-redux';
import Edit from './edit';
class TaskTodo extends Component{
    editList(id){
        console.log('in edit');
        this.setState({showEdit:true,selectedEdit:id});
        
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
                    <button onClick = {()=>{
                        console.log('send on show')
                        this.props.on_show(index)}}  >
                        edit
                    </button>

                </li>
            );
        });
    }
    render(){
        console.log(this.props.status.showStatus)
            return (
            <div>
                <ul className = "collection">
                    {this.renderList()}
                </ul>
                {this.props.status.showStatus ? <Edit/> : null}
            </div>
            );
         
    }
}

const mapStateToProps = (state)=>(

    {
        todo:state.todo,
        status:state.status
    }
);


const mapDispatchToProps  = (dispatch) => {
    return{
        delete_todo: (id)=>
        dispatch({
            type:'delete_todo',    
            payload:id
        
        }),
        on_show: (index) =>
        dispatch({
            type:'on_show',
            payload:{
                id:index
            }
        })
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskTodo); 