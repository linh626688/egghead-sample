import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = { increasing: false};
        this.update = this.update.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({ increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }
    update() {
        // this.setState({
        //     val: this.state.val + 1
        // })
        ReactDOM.render(
            <App val = {this.props.val + 1} />,
            document.getElementById('root')
        )
    }

    render()
    {
        console.log(this.state.increasing)
        return (
            <button onClick={this.update.bind(this)}>{this.props.val}</button>
        )
    }
    componenetDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }

}

App.defaultProps = {val : 0}


export default App;
