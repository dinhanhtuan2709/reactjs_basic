import logo from './logo.svg';
import React from 'react';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Nav from './Nav/nav';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListToDo';
import Home from './Example/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
         <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          
          <Switch>
            <Route path='/' exact> <Home/> </Route>
            <Route path='/todos'> <ListTodo/> </Route>
            <Route path='/lists'> <MyComponent/> </Route>
          </Switch>

      </header>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    {/* Same as */}
      <ToastContainer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
