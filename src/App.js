import React, { Component } from 'react';
import AddTodo from './components/addTodo';
import TaskTodo from './components/taskTodo';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <TaskTodo/>
      </div>
      
    );
  }
}

export default App;
