const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const productController = require('../controllers/product-controller')

router.get('/all', productController.getAllUserProducts);
router.get('/', authenticate, productController.getByUser)
router.post('/', authenticate, productController.createProduct)
router.put('/:id', authenticate,productController.updateProduct)
router.delete('/:id', authenticate, productController.deleteProduct)

module.exports = router