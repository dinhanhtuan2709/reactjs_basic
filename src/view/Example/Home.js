import React from "react";
import Color from "../HOC/Color";
import logo from '../../assets/image/logo.png'
import { connect } from "react-redux";

class Home extends React.Component{
    
    DeleteUser = (user) => {
        console.log('>>> Check user delete', user)
        this.props.deleteUserRedux(user);
    }
    CreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>Hello Home</div>
                <div>
                    <img src={logo} style={{width:'300px', height:'250px',marginTop:'20px'}}/>
                </div>
                <div>
                    {listUser && listUser.length > 0 && 
                        listUser.map((item , index) => {
                            return (
                                    <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;<span onClick={() => this.CreateUser()}>(+)</span>
                                    &nbsp;<span onClick={() => this.DeleteUser(item)}>(x)</span>
                                    </div>
                        )
                        })
                    }
                    <button onClick={() => this.CreateUser()}>
                        New User
                    </button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));