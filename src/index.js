import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { RoofPlants } from './instagram/roof-plants';
import { EyeBench } from './instagram/eye-bench';

const App = () => (
  <React.Fragment>
    <div className="App" style={{width:"500px"}}>
      <EyeBench /><br/><br/>
      <RoofPlants/>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
