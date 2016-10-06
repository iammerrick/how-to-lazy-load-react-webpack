import ReactDOM from 'react-dom';
import LazilyLoad, {importLazy} from './LazilyLoad';
import React from 'react';
import App from './App';

class Bootstrap extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      load: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      load: !this.state.load,
    });
  }
  render() {
    return (
      <div>
        <p>
        Hi, open your network panel and watch as App as a higher order component loads jQuery.
        </p>
        <p>
          <a 
            style={{ color: 'blue' }} 
            onClick={this.handleClick}>Press Here To Load</a>
        </p>
        <LazilyLoad modules={{ 
          LoadedLate: () => importLazy(System.import('./LoadedLate'))
        }}>
          {({LoadedLate}) => <LoadedLate />}
        </LazilyLoad>
        {this.state.load ? <App /> : null}
      </div>
    );
  }
}

ReactDOM.render(<Bootstrap />, document.getElementById('something'));
