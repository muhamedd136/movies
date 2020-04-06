import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details } from './pages';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details' component={Details} />
        </Switch>
      </Router>
      {/* <div className='App-Foter'>
        <span>© Muhamed Delihasanovic</span>
        <a href='https://www.github.com/muhamedd136/movies' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </div> */}
    </div>
  );
}

export default App;
