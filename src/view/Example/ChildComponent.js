import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob : false
    }
    handdleShowHide = () => {
        this.setState({
            showJob : !this.state.showJob
        })
    }
    handdleOnClickDetele = (delpt) =>{
        this.props.deleteDev(delpt)
    }

    render(){
         let{development} = this.props;
         let{showJob} = this.state;
        //  let check = showJob === true ? 'showJob = true' : 'showJob = false';
        return(
        <>
            {showJob === false ? 
            <div>
                <button onClick={() => this.handdleShowHide()}>Show</button>
                </div> 
                :
            <>
                <div>
                    <div className='list-actor'>
                    {
                        development.map((item, index) => {
                            return(
                                <div key={item.id}> {item.id} - {item.name} - {item.position} - {item.salary}
                                <></>
                                    <span onClick={() => this.handdleOnClickDetele(item)}> x </span>
                                </div>
                                
                            )
                        })
                    }
                    </div>
                    <button onClick={() => this.handdleShowHide()}>Hide</button>
                </div>
            </>
            }
        </>
        ) 
    }
}

// const ChildComponent = (props) => {
//     let{development} = props;
//     return(
//         <>
//         <div className='list-actor'>
//             {
//                 development.map((item, index) => {
//                     return(
//                         <div key={item.id}>{item.id} - {item.name} - {item.position} - {item.salary}</div>
//                     )
//                 })
//             }
//         </div>
//         </>
//     )
// }
export default ChildComponent;