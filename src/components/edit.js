import React, { Component } from 'react';
import {connect} from 'react-redux';
class Edit extends Component {

    onSibmitEdit(event){
        event.preventDefault();
        console.log(this.props)
        console.log(document.getElementById("editTextField").value);
        console.log(this.props.id)
        // var text =(document.getElementById("editTextField").value);
        // this.props.edit_todo(this.state.selectedEdit,text);
        // document.getElementById("editTextField").value="";
    }

    render() {
        return (
            <form onSubmit={(event)=>{
                event.preventDefault();
                // console.log(document.getElementById("editTextField").value);
                // console.log(this.props.id)
                // console.log(this.props)
                var text =(document.getElementById("editTextField").value);
                this.props.edit_todo(this.props.id,text);
                document.getElementById("editTextField").value="";
            }}>
                <label>edit todo detail</label>
                <input id="editTextField"  />
            </form>


        );
    }
}

const mapDispatchToProps  = (dispatch) => {
    return{
        edit_todo: (id,text) =>
        dispatch({
            type:'edit_todo',
            payload:{
                text,
                id
            }
        })
    }
};

export default connect(null,mapDispatchToProps)(Edit);