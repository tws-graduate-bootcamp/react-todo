import React, { Component } from 'react'
import Todos from './Todos'
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoResource from '../TodoResource.js';

export default class TodoList extends Component {
  componentDidMount() {
    TodoResource.getAll()
      .then(res => res.json())
      .then(res => {
        this.props.dispatch({
          type: "UPDATE_TODOS",
          payload: res._embedded.todos
        })
      })
  }
  onUpdateFilter = (e) => {
    this.props.dispatch({
      type: "SET_FILTER",
      payload: !this.props.isOnlyActive
    })
  }
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
        <label>
          <input type="checkbox" checked={this.props.isOnlyActive} onChange={this.onUpdateFilter}/> only active
        </label>
      </div>
    )
  }
}