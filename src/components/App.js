import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import NavBar from "./NavBar";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar/>
            </div>
        );
    }
}

export default App;
