import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//goto(3): 37 deploy 2:45 min

/*

class App extends React.Component {

  constructor() {
    super();
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log('button 1 clicked');
  }

  handleClick3 = () => console.log('button 3 clicked');

render() {
  return(
    <div>
  <button onClick={this.handleClick1()}>Click 1</button>
  <button onClick={this.handleClick1}>Click 2</button>
  <button onClick={this.handleClick2}>Click 3</button>
  <button onClick={this.handleClick3}>Click 4</button>
</div>
  );
}
}

export default App;
*/
