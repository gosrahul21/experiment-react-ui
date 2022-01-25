import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import RegularComponent from '../RegularComponent';


/**
 * this class is extending pure component which means it will only rerender 
 * when current props value is not equal to the previous props value
 * or current state value is not equal to the previous state value
 */

export default class PureClassComp extends PureComponent {
  


  render() {
      console.log("Pure class Component rerender")
    return <div>Pure class component<RegularComponent/> </div>;
  }
}
