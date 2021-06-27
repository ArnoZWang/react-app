import React, { Component } from 'react'
import Header from '../../components/header'
import './login.styl'

    class Login extends Component {
        render() {
            return (
               <div className="P-login">
                    <Header />
                    <h1>Login page</h1>
                    <p>This is the login page of this application.</p>
                    <p>If you click the button, you will return the home page.</p>
                    <button onClick={this.gotoHome.bind(this)}>Goto Home Page</button>
                </div>
            )
            }
        gotoHome() {
               this.props.history.push('/home')
        }
    }

    export default Login