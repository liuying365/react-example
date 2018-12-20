import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let {name, completed} = this.props.item;
        return (
            <li className="todo-list-item">
                <input type="checkbox" checked={completed} onChange={() => {
                    this.props.completed(this.props.index)
                }}/>
            
                {name}

                <span className="removed-item" onClick={() => {
                    this.props.rm(this.props.index)
                }}>×</span>
            </li>
        )
    }
}

export default TodoItem
