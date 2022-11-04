var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets.js');


router.get('/:flightId/tickets/new', ticketsCtrl.new);
router.post('/:flightId/tickets', ticketsCtrl.create);

module.exports = router;