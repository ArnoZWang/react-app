import React, { Component } from 'react'
import Header from '../../components/header'
import './home.styl'

    class Home extends Component {
        render() {
            return (
                <div className="P-home">
                    <Header />
                    <h1>Home page</h1>
                    <p>This is the home page of this application.</p>
                    <p>Yes, this is the home page of this application.</p>
                    <p>Indeed, this is the home page of this application.</p>
                    <p>I'm not kidding. This is the home page of this application.</p>
                </div>
            )
        }
    }

    export default Home