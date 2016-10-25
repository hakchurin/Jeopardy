import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';





const GameBoardQuestion2 = React.createClass({
  getInitialState: function(){
    return{
      questions:[]
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){
    $.ajax({
      type:'GET',
      url:`http://jservice.io/api/category?id=4`,
      success: (response) => {
        let allClues = 200;
        let questions = response;
        console.log(questions);

        let clueArry= questions.clues.filter((clues,i,arr) =>{
          if (clue.value === allClues) {
            allClues += 200;
            return clue;
          }
        });
        questions.clues= clueArry;
        let currentState= this.state.questions;
        currentState.push(questions);
        this.setState({questions:currentState});
      }
    });
  },
  render:function(){
    if (!this.state.questions[0]){
      return null;
    }
    return(
      <div>
      {this.props.questions.value}
      </div>
    );
  }
});

export default GameBoardQuestion2;
