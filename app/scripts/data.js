import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import $ from 'jquery';
import GameView from './GameView';
import GameBoardQuestionModal from './modal';
import GameBoardQuestion2 from './secondGameQuestion';
//












const GameBoardQuestion = React.createClass({
  getInitialState: function(){
    return{
        clicked:false
    }
  },
  componentWillMount: function(){},
  componentDidMount: function(){
},
clickHandler: function(e) {
  this.setState({clicked:true});
  this.props.showQuestion(this.props.question);

},
render:function(){
  if (this.state.clicked){
    return(
      <div id="square" >
      </div>
    );

  } else{
    return(
    <div onClick={this.clickHandler}id="square" >
    $ {this.props.question.value}
    </div>
  );
  }
  }
});
export default GameBoardQuestion;
