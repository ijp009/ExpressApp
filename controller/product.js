const Product = require('../models/product');

exports.create = function (req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.send('Created Successfully!!');
    })
};

exports.getAllProducts = function(req, res) {
    Product.find({}, function(err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });   
}

exports.getProducytById = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
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
    Product.update({'_id': req.params.id}, req.body, function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Updated Successfully');
    })
}

exports.deleteProduct = function (req, res) {
    Product.deleteOne({'_id': req.params.id}, function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Deleted Successfully');
    })
}