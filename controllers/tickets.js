const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
};

// function create(req, res) {
//     const ticket = new Ticket(req.body);
//     
//     ticket.save(function(err) {
//       if (err) return res.render('tickets/new');
//       
//       res.redirect(`/flights`);
//     });
// }

function create(req, res) {
    const ticket = new Ticket(req.body);
    Flight.findById(req.params.flightId, function (err, flight) {


        ticket.save(function (err) {
            res.redirect(`/flights/${flight.id}`);
        });
    });
}

function newTicket(req, res) {
    Flight.findById(req.params.flightId, function (err, flight) {




        if (err) return res.redirect('/');
        res.render('tickets/new', { flight });
    });
}