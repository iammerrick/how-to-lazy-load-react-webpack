import React from 'react';
import { LazilyLoadFactory } from './LazilyLoad';

export default LazilyLoadFactory(class extends React.Component {
  render() {
    return (
      <div 
        ref={(ref) => this.props.$(ref).css('background-color', 'red')}>
        Hello
      </div>
    );
  }
  
}, {
  $: () => import('jquery'),
});
