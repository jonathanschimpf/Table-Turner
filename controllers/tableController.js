const db = require("../models/");

// Defining methods for the tableController
module.exports = {
    deleteMany: function(req, res) {
        db.Order
        .deleteMany({table: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
}
