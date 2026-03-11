const express = require('express');
const router = express.Router();

const incomeController = require('../controllers/incomeController');

router.get('/idx',  incomeController.index);
router.post('/str', incomeController.store);
router.get('/fnd/:id', incomeController.find);
router.put('/upd/:id', incomeController.update);
router.delete('/del/:id', incomeController.deleteIncome);

module.exports = router;

