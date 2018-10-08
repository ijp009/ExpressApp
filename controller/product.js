const Users = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create = function (req, res) {
    let product = new Users({
        name: req.body.name,
        email: req.body.email
    });
    product.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.send('Created Successfully!!');
    })
};

exports.getAllProducts = function(req, res) {
    Users.find({}, function(err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });   
}

exports.getProducytById = function (req, res) {
    Users.findById(req.params.id, function (err, product) {
        if (err) {
            res.send(err);
        }
        if (product) {
            res.send(product);
        } else {
            res.send('No such product');
        }
    });
}

exports.updateProduct = function(req, res) {
    Users.update({'_id': req.params.id}, req.body, function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Updated Successfully');
    })
}

exports.deleteProduct = function (req, res) {
    Users.deleteOne({'_id': req.params.id}, function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Deleted Successfully');
    })
}