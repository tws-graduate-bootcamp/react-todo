import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map(({id, content, status}) => <li
          style={{textDecoration: status === 'completed' ? 'line-through' : 'none'}}
          key={id}>{content}</li>)}
      </div>
    )
  }
}