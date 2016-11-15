import React from 'react'

class ToDoListItem extends React.Component {
  render() {
    let complete = this.props.complete
    return(
      <li className={ complete ? 'complete' : '' }>
        { this.props.title }
      </li>
    )
  }
}


class ToDoList extends React.Component {
  render() {
    let todoList = [
      { title: 'Learn ES6', complete: true },
      { title: 'Learn about Components', complete: true },
      { title: 'Learn about State', complete: false }
    ]
    let listItems = todoList.map((item) => {
      return(<ToDoListItem title={item.title} complete={item.complete} />)
    })
    return(
      <ul>{ listItems }</ul>
    )
  }
}

export default ToDoList
