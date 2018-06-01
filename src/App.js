import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render()
    {
        return (
            <Parent>
                <div className="childA"></div>
                {/*<div className="childB"></div>*/}
            </Parent>
        )
    }
}

class Parent extends React.Component {
    render()
    {
        // let items = React.Children
        //     .forEach(this.props.children,child => child);
        // console.log(this.props.children)

        // let items = this.props.children.map(child => child)
        // let items = React.Children.map(this.props.children, child => child)
        let items = React.Children
            .forEach(this.props)
        console.log(items)
        return null
    }
}

export default App;
