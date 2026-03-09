const express = require('express');
const router = express.Router();

const incomeController = require('../controllers/incomeController');
const middl = require('../middleware/userMiddleware');

router.get('/idx', middl, incomeController.index);
router.post('/str',middl, incomeController.store);
router.get('/fnd/:id',middl, incomeController.find);
router.put('/upd/:id',middl, incomeController.update);
router.delete('/del/:id',middl, incomeController.deleteIncome);

module.exports = router;

