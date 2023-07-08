import React from 'react';

class MyComponent extends React.Component{

    state = {
      firstName : "",
      lastName : ""
    }
    handdleFirstName = (event) => {
        this.setState({
             firstName: event.target.value
        })
    }
    handdleLastName = (event) => {
        this.setState({
             lastName: event.target.value
        })
    }
    handdleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>>>> My data : ', this.state)
    }

    render(){
        return(
            <>
        <form>
            <label>First name: {this.state.firstName}</label><br/>
            <input type="text"
                value={this.state.firstName}
                onChange={(event) => this.handdleFirstName(event)} /><br/>

            <label>Last name:{this.state.lastName}</label><br/>
            <input type="text" 
                value={this.state.lastName}
                onChange={(event) => this.handdleLastName(event)}/><br/>
            <input type="submit"
                onClick = {(event) => this.handdleSubmit(event)}
            />
        </form> 
               
            </>
        )
    }
}
export default MyComponent;