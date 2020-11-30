const { Brand } = require('../models');


class BrandController {
    static async getBrand(req,res,next) {
        try {
            const result = await Brand.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.render('brand.ejs', {brand : result} )
        }
        catch (err) {
            next();
        }
    }

    static addFormBrand(req, res) {
        res.render('addBrand.ejs')
      
    }

    static async addBrand(req, res,next) {
        const { name } = req.body;
        try {
            const found = await Brand.findOne({
                where: {name}
            })
            if (found) {
                res.status(409).json({
                    msg : "This brand already exists"
                })
            }
            else {
                const brand = await Brand.create({
                    name
                })
                res.redirect('/brand');
            }
        }
        catch(err) {
            next();
        }
    }

    static async findById(req, res) {
        const id = req.params.id;
        try {
            const found = await Brand.findOne({
                where: { id }
            })
            res.status(200).json(found)
        }
        catch(err) {
            res.status(500).json(err);
        }
    }

    static async deleteBrand(req, res,next) {
        const id = req.params.id;
        try {
            const hapus = await Brand.destroy({
                where: { id }
            })
            res.redirect('/brand')
        }
        catch(err) {            
            next();
        }
    }
    static updateFormBrand(req, res,next) {
        const id = req.params.id;
        // console.log(id)
        Brand.findOne({
            where : { id }
        })
        .then(result => {
            console.log(result)
            res.render('editBrand.ejs', { brand:result });
        })
        .catch(err=>{
            next();
        })
    }
    static async updateBrand(req, res,next) { 
        const id = req.params.id;
        const { name } = req.body;
        try {
            const update = await Brand.update({ name },
             {  where: { id }
            })
             res.redirect('/brand')
        }
        catch(err) {
            next();
        }
    }
    
}

module.exports = BrandController;