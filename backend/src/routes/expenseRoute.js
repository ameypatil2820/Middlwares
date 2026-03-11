const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');


router.get('/eidx', expenseController.index);
router.post('/estore', expenseController.store);
router.get('/efind/:id', expenseController.find);
router.put('/eupdate/:id', expenseController.update);
router.delete('/edelete/:id', expenseController.deleteExp);

module.exports = router;
