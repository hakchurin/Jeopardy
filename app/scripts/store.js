import Score from './model/score';
import React from 'react';
import {router, Route, hashHistory, Link} from 'react-router';
import Session from './session';
import CategoryModel from './model/categoryModel';
import CategoryCollection from './collection/categoryCollection';





let store = {
  session: new Session(),
  categories: new CategoryCollection(),
  category: new CategoryModel(),
  score: new Score(),
  authtoken: '',

}

export default store;
