import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import GameBoardQuestion from './data';
import GameView from './GameView';
import Router from './router';
import store from './store';








const GameBoardQuestionModal = React.createClass({
  getInitialState: function(){
    return{
      answered: false,
      result: false
    }
 },


 submit: function(e){
   e.preventDefault();
   let guess = this.refs.answerInput.value;
   if (guess === this.props.question.answer){
     let getMoney= store.session.get('money');
     getMoney +=  this.props.question.value;
     store.session.set('money', getMoney);
     store.session.trigger('change')
     this.setState({result:true});
   } else {
     this.setState({result:false});
     console.log('wrong');
   }
   this.setState({answered:true});
},


back:function(){
  this.props.hideModal();
},

    render: function(){
      let answer;
      let guess;
      let result;
      if (this.state.answered){
        answer = <p id="answer"> Answer: {this.props.question.answer} </p>
        guess= <p id ="yourAnswer"> Your answer: {this.refs.answerInput.value}</p>
      }

      return(
        <div id="modal">
        <div id="insideModal">
        <p id ="modalQuestion" >{this.props.question.question}</p>
        <input type="text" id="answerInput" placeholder="answer" ref="answerInput"/>
        <input onClick ={this.submit} type="submit" id="enter" value="submit"/>
        <input onClick ={this.back} type="submit" id="enter" value="close"/>
        {guess}
        {answer}
        </div>
        </div>
      )
    }

});
export default GameBoardQuestionModal;

console.log('hi');
