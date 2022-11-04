const Flight = require('../models/flight');

module.exports = {
    create,
    // show
}

function create(req, res) {
    Flight.findById(req.params.flightId, function (err, flight) {


        flight.destinations.push(req.body);
        flight.save(function (err) {
            res.redirect(`/flights/${flight.id}`);
        });
    });
}
// function show(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         if (err) return res.redirect('/');
//         res.render('flights/show', { flight });
//     });
//     }