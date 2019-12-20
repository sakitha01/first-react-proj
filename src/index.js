import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Route,BrowserRouter, Switch } from 'react-router-dom'
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage'
import NavbarPage from './components/NavbarPage';
const routs = (
    < BrowserRouter >
    <NavbarPage/>
    <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signup" component={Signup} />
            <Route component={ErrorPage} />
         </Switch>
    </ BrowserRouter>);

ReactDOM.render(routs, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
