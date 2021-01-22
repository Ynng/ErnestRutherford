import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AOS from "aos"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Citation from './Citation';


AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/citation" component={Citation} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
