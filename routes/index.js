const { Router } = require('express');
const router = Router();
const categoryRoutes = require('./category'); 
const brandRoutes = require('./brand'); 
const productRoutes = require('./product'); 
const userRoutes = require('./user');


router.get('/', (req,res)=>{
    res.render ('index.ejs')
});
router.get('/login',(req , res) =>{
    res.render ('login.ejs')
});
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/brand', brandRoutes);
router.use('/product', productRoutes);



module.exports = router;
