import React from 'react';

class LoadedLateAsClass extends React.Component {
  hello() {
    console.log('Hello from loaded late.');
  }
  render() {
    return (
      <div>
        Loaded late class!
      </div>
    );
  }
}

export default LoadedLateAsClass;
