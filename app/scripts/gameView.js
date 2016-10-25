import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import GameCategory from './GameCategory';
import GameList from './GameList';
import router from './router';
import GameBoardQuestion from './data';
import $ from 'jquery';
import GameBoardQuestionModal from './modal';
import GameView2 from './GameQuestion2';
import Category from './category';
import Scoreboard from './scoreboard';
import store from './store';



const GameView  = React.createClass({


    getInitialState: function(){
      return{
        categories:store.categories.toJSON(),
        showModal:false
      }
    },
    updateState: function(){
      this.setState({
        categories: store.categories.toJSON(),
      })
    },
    componentWillMount: function(){

    },
    componentDidMount: function(){
      store.categories.on('change', this.updateState);
      store.score.on('change', this.updateState);
      store.categories.makeNewGame();
    },

  showQuestion: function(clue){
    this.setState({showModal: true,clue:clue});
  },
  hideModal: function(){
      hashHistory.push('/gameView');
      this.setState({showModal:false});

  },
  render: function(){
    let categories;
    if (this.state.categories[0]){

      categories = this.state.categories.map((category,i)=>{
        return <Category category={category} showQuestion={this.showQuestion} key={i}/>
      })
    }

    let modal;
    if (this.state.showModal){
        modal= <GameBoardQuestionModal question={this.state.clue} hideModal={this.hideModal}/>
    }

    return(

      <div id="box">
      <h1 id= "title"> Jeopardy! </h1>
      {modal}
        <div id="categories">
        {categories}
        </div>
        <Scoreboard />
      </div>
    )
  }
});

export default GameView;
