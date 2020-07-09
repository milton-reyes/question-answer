import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import QuestionFormComponent from './components/question.form'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route path="">
              <QuestionFormComponent />

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
