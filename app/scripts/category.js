import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import GameBoardQuestion from './data';
// import GameView from './gameView;'






const GameViewList = React.createClass({
  // getInitialState: function(){
  //   return {
  //     title: '',
  //
  //   }
  // },
  componentDidMount: function(){
    // $.ajax({
    //   type: 'GET',
    //   url: `http://jservice.io/api/category?id=6`,
    //   success: (data) => {
    //   this.setState({title:data})
    // }
    // })
  },
  render: function(){
    let questions = this.props.category.clues.map((clue,i,arr) => {
      return < GameBoardQuestion key= {i} question= {clue} showQuestion = {this.props.showQuestion} />
    });
    return (
      <div>
      <h3>{this.props.category.title} </h3>
      <ul>
        {questions}
      </ul>
      </div>
    );
  }
});

export default GameViewList;

// ={i}> <p>${clue.value}</p>
