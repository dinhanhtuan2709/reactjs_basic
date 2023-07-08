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
                
                <div>Hello my Component by D.A.T ^.^</div>
            </>
        )
    }
}
export default MyComponent;