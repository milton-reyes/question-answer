import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HeaderComponent from './components/header-component/header.component';
import ContentComponent from './components/content-component/content.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route path="/question">
              <HeaderComponent />
              <ContentComponent />

            </Route>
            <Route path="/answer">


            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
