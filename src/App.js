import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return <Title text="123466"/>
    }
}

const Title = (props) => <h1>Tilte: {props.text}</h1>
Title.propTypes ={
    // text: React.PropTypes.string.isRequired
    text(props, propName, component){
        if(!(propName in props) ) {
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6 ) {
            return new Error(`${propName} was too short`)
        }
    }
}

export default App;
