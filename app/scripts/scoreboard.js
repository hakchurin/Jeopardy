import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import GameBoardQuestion from './data';
// import GameView from './GameView';
// import Router from './router';
//import Score from './score';
import store from './store';
import session from './session';


const Scoreboard = React.createClass({
  getInitialState: function(){
    return {score: store.session.get('money')};

      // right: store.score.right,
      // wrong: store.score.wrong,
      // money: store.score.money
  },
  componentDidMount: function(){
    store.session.on('change', () => {
      this.setState({score: store.session.get('money')});
    });
    store.session.hasChanged();
  },
  render:function(){
    return(
      <div>
      <div className= "scoreboard">
        <div id="money">
        <h3> Total ${this.state.score}</h3>
        </div>
      </div>
      </div>
    );
  }
});

export default Scoreboard;
// <p className= "answered-wrong"> Wrong:{this.state.wrong}</p>


// <p id= "answered-right">Right:{this.state.right}</p>
