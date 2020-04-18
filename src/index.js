import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

const App = () => (
  <React.Fragment>
    <div className="App">
      <a href="https://www.instagram.com/phmrlcmpttns/">@phmrlcmpttns</a>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
