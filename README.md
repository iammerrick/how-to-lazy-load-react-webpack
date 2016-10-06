# How to lazy load React in Webpack

This is an example repository of lazily loading React in webpack.

It supports two APIs:

## Higher Order Component for Specifying Dependencies

```javascript
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
  $: () => System.import('jquery'),
});
```

## Function as Child for Consumer Lazy Loading

```javascript
import LazilyLoad, {importLazy} from './LazilyLoad';
import React from 'react';

<LazilyLoad modules={{ 
  LoadedLate: () => importLazy(System.import('./LoadedLate'))
}}>
  {({LoadedLate}) => <LoadedLate />}
</LazilyLoad>
```
