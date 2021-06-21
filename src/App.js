import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import React, { useState } from 'react';
import EnterThoughtComponent from './components/EnterThoughtComponent'
import MatchedComponent from './components/MatchedComponent'
import MatchingComponent from './components/MatchingComponent';
import HeaderComponent from './components/HeaderComponent';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
`

export default function App() {
  const [thoughtText, setThoughtText] = useState('')
  const [relatedThoughts, setRelatedThoughts] = useState([]);

  return (
    <AppContainer>
      <HeaderComponent />
      <Router>
        <Switch>

          <Route path="/matching">
            <MatchingComponent thoughtText={thoughtText} setRelatedThoughts={setRelatedThoughts} />
          </Route>

          <Route path="/matched">
            <MatchedComponent relatedThoughts={relatedThoughts} setThoughtText={setThoughtText} />
          </Route>

          <Route path="/">
            <EnterThoughtComponent thoughtText={thoughtText} setThoughtText={setThoughtText} />
          </Route>
          
        </Switch>
      </Router>
    </AppContainer>
  );
}
