import React, { Component } from "react";

import TodoItem from './TodoItem'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: []
        };
    }
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('todoList')) || [];
        this.setState({
            list
        });
    }
    addHandle(name) {
        if (!name) return;
        let list = [...this.state.list];
        list.push({name, completed: false});
        this.setState({
            list,
            value: ''
        });
        localStorage.setItem('todoList', JSON.stringify(list));
    }
    removeHandle(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        });
        localStorage.setItem('todoList', JSON.stringify(list));
    }
    completedHandle(index) {
        let list = [...this.state.list];
        list.map((item, i) => {
            if (index === i) {
                item.completed = !item.completed;
            } 
            return item;
        });
        this.setState({
            list
        });
        localStorage.setItem('todoList', JSON.stringify(list));
    }
    getValue(e) {
        let value = e.target.value.trim();
        this.setState({
            value
        });
    }
    render() {
        return (
            <div className="todo-list">
                <div className="input-box">
                    <input
                        style={{float: 'left'}}
                        onChange={(e) => {this.getValue(e)}}
                        value={this.state.value}
                        type="text"/>
                    <button className="add-btn"
                        onClick={() => {this.addHandle(this.state.value)}}
                        >add
                    </button>
                </div>

                <h2>待办事项
                    <span className="tag">{this.state.list ? this.state.list.filter(item => !item.completed).length : 0}</span>
                </h2>
                
                <ul style={{margin: 0, padding: 0}}>
                    {this.state.list && this.state.list.map((item, index) => {
                        if (!item.completed) {
                            return (
                                <TodoItem key={index}
                                    item={item} index={index}
                                    rm={index => this.removeHandle(index)}
                                    completed={index=> this.completedHandle(index)}
                                />
                            )
                        } else {
                            return null;
                        }
                    })}
                </ul>

                <h2>已完成事项
                    <span className="tag">{this.state.list ? this.state.list.filter(item => item.completed).length : 0}</span>
                </h2>

                <ul className="completed-show">
                    {this.state.list && this.state.list.map((item, index) => {
                        if (item.completed) {
                            return (
                                <TodoItem key={index}
                                    item={item} index={index}
                                    rm={index => this.removeHandle(index)}
                                    completed={index=> this.completedHandle(index)}
                                />
                            )
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default Todolist;
