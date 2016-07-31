import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import $ from 'jquery';
import GameView from './GameView';
//import GameCategory from './GameCategory';
import GameBoardQuestionModal from './modal';
import GameBoardQuestion2 from './secondGameQuestion';
//












const GameBoardQuestion = React.createClass({
  getInitialState: function(){
    return{
      questions:[]
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=5`,
      success: (response) => {
        let allClues= 200;
        let questions= response;
        let clueArry= questions.clues.filter((clue,i,arr) =>{
          if(clue.value === allClues ) {
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
clickHandler: function(e) {
  this.props.showQuestion(this.props.question);
},
render:function(){
  if (!this.state.questions[0]){
    return null;
  }

  return(
    <div onClick={this.clickHandler}id="square" >

    $ {this.props.question.value}
    </div>
  );
  }
});
export default GameBoardQuestion;
