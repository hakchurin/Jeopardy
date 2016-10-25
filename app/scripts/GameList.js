import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import questions from './data';



const GameList = React.createClass({
  getInitialStae:function(){
    return
  },
  render: function() {

    return (
      <div>{questions[0].clues[0].question}</div>
    )
  }
});

export default GameList;
