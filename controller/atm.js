const CardField = require('../models/cardFields');
const ATMFields = require('../models/atmFields');
const TransactionFields = require('../models/transactionFields');
const mongo = require('mongodb');
exports.validateCard = function (req, res) {
    
    CardField.find({
        card_number: req.query.card_number,
        pin: req.query.pin
    }, function(err, cardDetails) {
        if (err) {
            res.send(err);
        } else {
            res.send(cardDetails);
        }
    });
}

exports.getDenominationCounts = function(req, res) {
    ATMFields.find({
        atm_id: req.query.atm_id
    }, {}, {sort: {currency_denomination: -1}}, function(err, atmDetails) {
        if (err) {
            res.send(err);
        } else {
            res.send(atmDetails);
        }
    })
}

exports.updateBalance = function(req, res) {
    CardField.update({
        _id: new mongo.ObjectID(req.body._id),
    }, {balance: req.body.balance}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
}

exports.updateDenominations = async function(req, res) {
    const denominationsToUpdate = req.body; 
    let dataToReturn = [];
    try {
        dataToReturn = await Promise.all(denominationsToUpdate.map(async (denomination) => {
            delete denomination.isUpdated;
            return await ATMFields.update({
                _id: new mongo.ObjectID(denomination._id)
            }, {count: denomination.count}, function(err, data) {
                if (err) {
                    return err;
                } else {
                    return data;
                }
            });
        }));
        res.send(dataToReturn);
    } catch(err) {
        res.send(err);
    }
    
}

exports.updateTransactions = function(req, res) {
    let transactionfields = new TransactionFields({
        atm_id: req.body.atm_id,
        card_id: req.body.card_id,
        dispensed_amount: req.body.dispensed_amount,
        dispensed_cash: req.body.dispensed_cash
    });
    transactionfields.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send({'message': 'Logged successfully!!'});
        }
    })
}

exports.fetchAll = async function(req, res) {
    const atmData = await ATMFields.find({}, function(err, data) {
        return data;
    });
    const cardData = await CardField.find({}, function(err, data) {
        return data;
    });
    const transactionData = await TransactionFields.find({}, function(err, data) {
        return data;
    });

    res.send({
        ATMFields: atmData,
        CardFields: cardData,
        TransactionFields: transactionData
    });
}