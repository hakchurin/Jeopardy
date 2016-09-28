import Backbone from 'backbone';
import _ from 'underscore';
import CategoryModel from '../model/categoryModel';


const CategoryCollection = Backbone.Collection.extend({
model: CategoryModel,
url: `http://jservice.io/api/category?id=4`,
makeNewGame: function (gameState) {
  this.reset();

  _(6).times(()=>{
    this.add({});
  });

  this.each((categoryModel)=>{
    categoryModel.getCategory(Math.floor(Math.random() * 18000));
  });

  return true;
},

});

export default CategoryCollection;
