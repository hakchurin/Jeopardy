// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
// import GameCategory from './GameCategory';
// import GameList from './GameList';
// import router from './router';
// import GameBoardQuestion from './data';
// import $ from 'jquery';
// import GameBoardQuestionModal from './modal';
//
//
//
// const GameView2  = React.createClass({
//
//     getInitialState: function(){
//       return{
//         questions:[]
//       }
//     },
//     componentWillMount: function(){},
//     componentDidMount: function(){
//       $.ajax({
//         type: 'GET',
//         url: `http://jservice.io/api/category?id=4`,
//         success: (response) => {
//           let allClues= 200;
//           let questions= response;
//           let clueArry= questions.clues.filter((clue,i,arr) =>{
//             if(clue.value === allClues ) {
//               allClues += 200;
//               return clue;
//             }
//           });
//           questions.clues= clueArry;
//           let currentState= this.state.questions;
//           currentState.push(questions);
//           this.setState({questions:currentState});
//           console.log(this.state.questions);
//       }
//     });
//   },
//   clickHandler: function(e) {
//     console.log('go to the modal now');
//   },
//
//   render: function(){
//     let categoryGameQuestion2;
//     let categoryValue2;
//     let categoryTitle2;
//     let GameBoardQuestionModal;
//     if (this.state.questions[0]){
//       categoryTitle2 = <p>{this.state.questions[0].title}</p>;
//       // categoryValue= <p>{this.state.questions[0].value}</p>;
//       GameBoardQuestionModal= this.clickHandler;
//       let categoryQuestion2 = this.state.questions[0].clues;
//       categoryGameQuestion2 = categoryQuestion2.map((question,i) =>{
//        return <GameBoardQuestion question={question} key={i}/>;
//      })
//     }
//
//
//     return(
//       <div>
//       <div onClick={this.clickHandler}/>
//
//       {categoryTitle2}
//       {categoryGameQuestion2}
//       </div>
//     )
//   }
// });
//
// export default GameView2;
