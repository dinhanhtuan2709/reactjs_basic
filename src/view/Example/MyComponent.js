import React from 'react';

class MyComponent extends React.Component{

    state = {
        Name: 'Tuan',
        Age: '20'
    }
    ChangAge = (event) =>{
        this.setState({
            Age: event.target.value
        })
    }
     ChangName = (event) =>{
        this.setState({
            Name: event.target.value
        })
    }
    handdleButton = () =>{
        alert('Operation is Excute')
    }
    render(){
        return(
            <>

                <div className='Name'>
                    <input value={this.state.Name} type='text' onChange={(event) => this.ChangName(event)}/>
                    My name is : {this.state.Name}</div>

                <div className='Age'>
                    <input value={this.state.Age} type='text' onChange={(event) => this.ChangAge(event)}/>
                        This year, I'm {this.state.Age} years old
                    </div>
                <div className='btn-click'>
                    <button onClick={this.handdleButton}>
                        Click here
                    </button>
                </div>
                
            </>
        )
    }
}
export default MyComponent;