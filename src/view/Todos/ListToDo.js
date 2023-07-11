import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddToDo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{

    state = {
        listTodo: [
            { id: 'Todo1', title: 'Play Game' },
            { id: 'Todo2', title: 'Listen to Music' },  
            { id: 'Todo3', title : 'Doing homework'}
        ]
    }
    
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success('Wow Successful !')
    }

    render() {
        let { listTodo } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo} />
                <div className="todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                            <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title } </span>
                        <button className="edit"> Edit </button>
                        <button> Delete </button>
                    </div>
                        )
                    })}
                    
                </div>
             </div>
        )
    }

}

export default ListTodo;
