import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor()
    {
        super();
        this.state = {
            txt: 'This is txt'
        }
    }

    update(e)
    {
        this.setState({txt:e.target.value})
    }

    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>


                <h1>{this.state.txt}</h1>
                <Widget update={this.update.bind(this)}></Widget>
                <Widget update={this.update.bind(this)}></Widget>
                <Widget update={this.update.bind(this)}></Widget>
            </div>
        );
    }
}
const Widget = (props) => <input type="text" onChange={props.update}></input>


export default App;
