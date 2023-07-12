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
        ],
        editTodo: {}
    }
    
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success('Add todo completed !')
    }

    deleteTodo = (todo) => { 
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo
        })
        toast.success('Delete todo completed !')
    }

    handdleEditToDo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodoCopy = [...listTodo];

            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })

            toast.success('Edit todo completed !')
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handdleOnchangeEditToDo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }


    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p className='title'>
                    <b>Simple List App Todo with D.A.T ^.^</b>
                </p>
            <div className="list-todo-container">

                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                
                <div className="todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?  
                                        <span>{index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title} onChange={(event) => this.handdleOnchangeEditToDo(event)}/>
                                                </span>
                                                :
                                                 <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                       
                                    }
                                    <button className="edit" onClick={() => this.handdleEditToDo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                        <button onClick={() => this.deleteTodo(item)}> Delete </button>
                    </div>
                        )
                    })}
                    
                </div>
             </div>
            </>
            
        )
    }

}

export default ListTodo;
