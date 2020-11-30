'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brand.belongsToMany(models.Category, {through: 'models:Product'})
    }
  };
  Brand.init({
    name:{ 
      type: DataTypes.STRING,
      validate : {
        notEmpty : { 
          msg : "Name must be filled"
        }
      }
  }
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};