const { Router } = require('express');
const router = Router();
const ProductController = require('../controllers/Product')

router.get('/', ProductController.getProduct);
router.get('/add', ProductController.addFormProduct)
router.post('/add', ProductController.addProduct)
router.get('/delete/:id', ProductController.deleteProduct)
router.get('/edit/:id', ProductController.editFormProduct)
router.post('/edit/:id', ProductController.editProduct)






module.exports = router;
