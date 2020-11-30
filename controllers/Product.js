const { Product,Brand,Category } = require('../models')

class ProductController {
    static async getProduct(req, res,next) {
        try {
            const result = await Product.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Brand,Category
                ]
            })
            res.render('products.ejs' ,{product:result});
            
        }
        catch (err) {
            next();
        }
    }

    static addFormProduct(req, res) {
        res.render('addProduct.ejs');
    }
    static async addProduct(req, res,next) {
        const { BrandId,CategoryId } = req.body;
        try {
            await Product.create({
                BrandId,CategoryId
            })
            // res.status(201).json(product);
            res.redirect('/product')
        }
        catch(err) {
            next();
        }
    }
    static async deleteProduct(req, res,next) {
        const id = req.params.id;
        try {
            const hapus = await Product.destroy({
                where: { id }
            })
            res.redirect('/product')
        }
        catch(err) {
            next();
        }
    }
    static editFormProduct(req, res,next) {
        const id = req.params.id;
        Product.findOne({
            where : { id }
        })
        .then(result => {
            res.render('editProduct.ejs', { product: result });
        })
        .catch(err=>{
            next();
        })
    }
    static async editProduct(req,res,next) {
        const id = req.params.id;
        const { BrandId,CategoryId} = req.body;
        try{
            const product = await Product.update({ BrandId,CategoryId},
                { where : { id }
        })
        res.redirect('/product')
    } catch(err){
        next();
    }
    }

}

module.exports = ProductController; 