const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const middl = require('../middleware/userMiddleware')


router.get('/eidx', middl, expenseController.index);
router.post('/estore', middl, expenseController.store);
router.get('/efind/:id', middl, expenseController.find);
router.put('/eupdate/:id', middl, expenseController.update);
router.delete('/edelete/:id', middl, expenseController.deleteExp);

module.exports = router;
