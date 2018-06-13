import React, { Component } from 'react';
import AddTodo from './components/addTodo';
import TaskTodo from './components/taskTodo';
import SelectView from './components/selectView';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <TaskTodo/>
        <SelectView/>
      </div>
      
    );
  }
}

export default App;
