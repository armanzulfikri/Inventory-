'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Brand, {through : 'models.Product'})
    }
  };
  Category.init({
    name: {
      type:DataTypes.STRING,
      validation : {
        notEmpty: {
          msg: "please fill the column"
        }
      }
      },
    info: {
      type: DataTypes.STRING,
      validation : {
        isUrl: {
          msg: "please input url"
        },
        notEmpty: {
          msg: "please fill the column"
        }
      }
      },
    stock: {
      type: DataTypes.INTEGER,
      validation : {
        notEmpty: {
          msg: "please fill the column"
        }
      }
      },
    price:{
       type:DataTypes.INTEGER,
       validation : {
         notEmpty: {
           msg: "please fill the column"
         }
       }
    },
    waranty: {
      type:DataTypes.STRING,
      validation : {
        notEmpty: {
          msg: "please fill the column"
        }
      }
    },
    no_product: {
      type:DataTypes.STRING,
      validation : {
        notEmpty: {
          msg: "please fill the column"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};