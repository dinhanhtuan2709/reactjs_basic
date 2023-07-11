import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component{

    state = {
      Development: [
        {id: 1, name:'Nhung', position: 'Tester', salary: 400},
        {id: 2, name:'Hao', position: 'Tester', salary: 600}
      ]
    }

    addnewDevelopment = (delt) => {
        this.setState({
            Development: [...this.state.Development, delt]
        })
    }
    
    deleteDev = (delt) =>{
        let currentDev = this.state.Development;
        currentDev = currentDev.filter(item => item.id !== delt.id);
        this.setState({
            Development: currentDev
        })
    }

    render(){
        return(
            <>
       
               <ChildComponent 
                    development = {this.state.Development} 
                    deleteDev = {this.deleteDev}
               />
               
               <AddComponent
               addnewDevelopment = {this.addnewDevelopment}
               
               />
               
            </>
        )
    }
}
export default MyComponent;