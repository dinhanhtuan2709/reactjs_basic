import React from "react";

class AddComponent extends React.Component{

    state = {
        name: '',
        position : "",
        salary : ""
    }
    handdlename = (event) => {
        this.setState({
             name: event.target.value
        })
    }
    
    handdleposition = (event) => {
        this.setState({
             position: event.target.value
        })
    }
    handdlesalary = (event) => {
        this.setState({
             salary: event.target.value
        })
    }
    handdleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.position || !this.state.salary || !this.state.name)
        {
            alert('Please complete all information !')
            return;
        }

        this.props.addnewDevelopment({
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            position: this.state.position,
            salary : this.state.salary
        })

        this.setState({
            name: '',
            position: '',
            salary: ''
        })
    }
    render(){
        return(
             <form>
                <label style={{color:"#fd5203"}}>Name: {this.state.name}</label><br/>
                <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.handdlename(event)} /><br/>

                <label style={{color:"#fd5203"}}>Position: {this.state.position}</label><br/>
                <input type="text"
                    value={this.state.position}
                    onChange={(event) => this.handdleposition(event)} /><br/>

                <label style={{color:"#fd5203"}}>Salary: {this.state.salary}</label><br/>
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handdlesalary(event)}/><br/>

                <input type="submit" value="Submit"
                    onClick = {(event) => this.handdleSubmit(event)}
                />
        </form> 
        )
    }
}

export default AddComponent