const { Router } = require('express');
const router = Router();
const BrandController = require('../controllers/Brand')

// const { authentication } = require('../middlewares/auth')

router.get('/',  BrandController.getBrand)
router.get('/add', BrandController.addFormBrand);
router.post('/add', BrandController.addBrand);
router.get('/delete/:id', BrandController.deleteBrand);
router.get('/edit/:id', BrandController.updateFormBrand);
router.post('/edit/:id', BrandController.updateBrand);


module.exports = router;
