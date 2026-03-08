const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/register', userController.register)
router.post('/login',userController.login)
router.get('/', userController.index);
router.post('/store', userController.store);
router.get('/find/:id', userController.find);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;