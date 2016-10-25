import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import GameView from './gameView';
import GameBoard from './data';
import GameBoardQuestion2 from './secondGameQuestion';
import Color from './color';


const router = (
  <Router history = {hashHistory}>
    <Route path="/" component={GameView}/>
    <Route path="/gameView" component={GameView}/>
    <Route path ="/gameVew" component={Color}/>
        </Router>
)

export default router;
