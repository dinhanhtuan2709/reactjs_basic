import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{
    state = {
        title: ''
    }

    handdleOnChangTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handdleAddTODO = () => {
        if (!this.state.title) { 
            toast.error('Please complete information !');
            return;
        }
        
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        let{ title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                onChange={(event) => this.handdleOnChangTitle(event)}/>
                <button type="button" className="add"
                onClick={() => this.handdleAddTODO()}>Add</button>
            </div>
        )
    }
    
}

export default AddTodo;