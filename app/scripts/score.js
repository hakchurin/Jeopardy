import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import router from './router';
import Backbone from 'backbone';
import $ from 'jquery';

//
// const Score = React.createClass({
//   getInitialState: function(){
//     return {
//       right: 0,
//       wrong: 0,
//       moeny: 0
//     }
//   }
// });



const Score = Backbone.Model.extend({
  defaults: {
    right: 0,
    wrong: 0,
    money: 0
  }

});

export default Score;
