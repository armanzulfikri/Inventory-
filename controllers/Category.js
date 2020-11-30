const { Category } = require('../models');

class CategoryController {
    static async getCategory(req,res,next) {
        try {
            const result = await Category.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.render('categories.ejs', { categories: result})
        }
        catch (err) {
            next();
        }
    }

    static addFormCategory(req, res) {
        res.render('addCategories.ejs')
    }

    static async addCategory(req, res,next) {
        const { name, info, stock,price,waranty, no_product } = req.body;
        try {
            const found = await Category.findOne({
                where: {
                    name
                }
            })
            if (found) {
                res.status(409).json({
                    msg : "This category already exists"
                })
            }
            else {
                const category = await Category.create({
                    name, info, stock, price,waranty, no_product
                })
                res.redirect('/categories')
            }
        }
        catch(err) {
            next();
        }
    }
    static async findById(req, res) {
        const id = req.params.id;
        try {
            const found = await Category.findOne({
                where: { id }
            })
            res.status(200).json(found)
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
    static async deleteCategory(req, res,next) {
        const id = req.params.id;
        try {
            const hapus = await Category.destroy({
                where: { id }
            })
            res.redirect('/categories')
        }
        catch(err) {
            next();
        }
    }
    static editFormCategory(req, res,next) {
        const id = req.params.id;

        Category.findOne({
            where : { id }
        })
        .then(result => {
            console.log(result)
            res.render('editCategories.ejs', { categories:result });
        })
        .catch(err=>{
            next();
        })
    }
    static async editCategory(req,res,next) {
        const id = req.params.id;
        const { name, info, stock,price,waranty, no_product} = req.body;
        try{
            const update = await Category.update({ name, info, stock, price, waranty, no_product},
                { where : { id }
        })
        res.redirect('/categories')
    } catch(err){
        next();
    }
    }
}
module.exports = CategoryController;