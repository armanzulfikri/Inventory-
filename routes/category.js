const { Router } = require('express');
const { findById } = require('../controllers/Category');
const CategoryController = require('../controllers/Category');
const router = Router();

// const { authentication } = require('../middlewares/auth')

router.get('/',  CategoryController.getCategory)
router.get('/add', CategoryController.addFormCategory);
router.post('/add', CategoryController.addCategory);
router.get('/find/:id', CategoryController.findById);
router.get('/delete/:id', CategoryController.deleteCategory);
router.get('/edit/:id', CategoryController.editFormCategory);
router.post('/edit/:id', CategoryController.editCategory);

module.exports = router;
