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



const GameView  = React.createClass({


    getInitialState: function(){
      return{
        categories:[],
        showModal:false
      }
    },
    componentWillMount: function(){},
    componentDidMount: function(){
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=109`,
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
          let currentState= this.state.categories;
          currentState.push(questions);
          this.setState({categories:currentState});
      }
    });
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=11534`,
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
          let currentState= this.state.categories;
          currentState.push(questions);
          this.setState({categories:currentState});
      }
    });
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=42`,
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
          let currentState= this.state.categories;
          currentState.push(questions);
          this.setState({categories:currentState});
      }
    });
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=40`,
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
          let currentState= this.state.categories;
          currentState.push(questions);
          this.setState({categories:currentState});
      }
    });
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=11505`,
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
          let currentState= this.state.categories;
          currentState.push(questions);
          this.setState({categories:currentState});
      }
    });
      $.ajax({
        type: 'GET',
        url: `http://jservice.io/api/category?id=680`,
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
          let currentState= this.state.categories;
          currentState.push(questions);
          this.setState({categories:currentState});
      }
    });
  },

  showQuestion: function(clue){
    this.setState({showModal: true,clue:clue});
  },
  hideModal: function(){
    // if (this.state.answered){
      console.log(this.state);
      hashHistory.push('/gameView');
      this.setState({showModal:false});
      console.log('this at gameView ', this);
    // }
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
        {modal}
        {categories}
        <Scoreboard />
      </div>
    )
  }
});

export default GameView;



//
// categoryTitle = <p>{this.state.categories[0].title}</p>;
// categoryValue= <p>{this.state.questions[0].value}</p>;
// let categoryQuestions = this.state.categories[0].clues;
//
//   category = categoryQuestions.map((question,i) => {
//    return <GameBoardQuestion showQuestion= {this.showQuestion} question= {question} key={i}/>;
//  })
