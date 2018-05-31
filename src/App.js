import React, {Component} from 'react';
import ReactDOMfrom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = { a: ''};
        // this.update = this.update.bind(this);
    }
    update() {
        this.setState({
            // a : ReactDOM.findDOMNode(this.a).value,
            a : this.a.refs.input.value,
            b : this.refs.b.value
        })
    }
    render()
    {
        return (
            <div>
                <Input
                    ref={ component => this.a = component}
                    update = {this.update.bind(this)}
                />
                {this.state.a}
                <hr/>
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                {this.state.b}

            </div>
        )
    }
}
class Input extends React.Component {
    render(){
        return <input ref="input" type="text" onChange={this.props.update} />
    }
}

export default App;
