import React, { Component } from 'react'
import Todos from './Todos'
import TodoInputContainer from '../containers/TodoInputContainer';

export default class TodoList extends Component {
  componentDidMount() {
    fetch("http://localhost:8080/api/todos", {mode: 'cors'})
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