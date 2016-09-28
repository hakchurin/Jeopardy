import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import $ from 'jquery';



const Score = Backbone.Model.extend({
  defaults: {
    right: 0,
    wrong: 0,
    money: 0
  }

});

export default Score;
