const express = require('express');
const router = express.Router();

const atm_controller = require('../controller/atm');

router.get('/validateCard', atm_controller.validateCard); // Validate card and get all the details

router.get('/getDenomination', atm_controller.getDenominationCounts); // get current atm denominations count

router.put('/updateBalance', atm_controller.updateBalance); // update balance after dispensing cash

router.put('/updateDenomination', atm_controller.updateDenominations); // update denominations of the atm after dispensing cash

router.post('/updateTransaction', atm_controller.updateTransactions); // add transaction


// GET all
router.get('/fetchAll', atm_controller.fetchAll); // Fetches everything. For reference purpose.

module.exports = router;