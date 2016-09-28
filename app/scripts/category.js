import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import GameBoardQuestion from './data';
// import GameView from './gameView;'


const GameViewList = React.createClass({
  componentDidMount: function(){

  },
  render: function(){
    console.log(this.props);
    let questions;
    // if (this.props.category.category.clues.length) {
      questions = this.props.category.category.clues.map((clue,i,arr) => {
        return < GameBoardQuestion key= {i} question= {clue} showQuestion = {this.props.showQuestion} />
      });
    // }
    return (
      <div>
      <h3>{this.props.category.category.title} </h3>
      <ul>
        {questions}
      </ul>
      </div>
    );
  }
});

export default GameViewList;

// ={i}> <p>${clue.value}</p>
