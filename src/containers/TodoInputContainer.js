import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput.js'
import TodoResource from '../TodoResource.js';

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    }
    TodoResource.createTodo(newTodoItem)
      .then(res => res.json())
      .then(({id, status, content}) => {
        dispatch({
          type: 'ADD_TODO',
          payload: {id, status, content}
        })
      })
  }
})
// const mapDispatchToProps = {
//   addNewTodo: newTodo => ({
//     type: 'ADD_TODO',
//     payload: newTodo
//   })
// }
export default connect(null, mapDispatchToProps)(TodoInput)