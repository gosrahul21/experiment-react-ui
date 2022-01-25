import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureClassComp from './PureClassComp';

export default class App extends Component {
    state = {component:"Class App Component"};

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                component:"Class App Component"
            });
        },2000)
    }

  render() {
    return <div>
        App component 
        <PureClassComp propTest = {this.state.component} />
    </div>;
  }
}
