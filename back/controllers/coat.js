const uuid = require('uuid/v1');
const coat = require('../models/coat');

exports.getAllcoats = (req, res, next) => {
  coat.find().then(
    (coats) => {
      const mappedcoats = coats.map((coat) => {
        coat.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + coat.imageUrl;
        return coat;
      });
      res.status(200).json(mappedcoats);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOnecoat = (req, res, next) => {
  coat.findById(req.params.id).then(
    (coat) => {
      if (!coat) {
        return res.status(404).send(new Error('coat not found!'));
      }
      coat.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + coat.imageUrl;
      res.status(200).json(coat);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * coats: [string] <-- array of coat _id
 *
 */
exports.ordercoats = (req, res, next) => {
  if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.coats) {
    return res.status(400).send(new Error('Bad request!'));
  }
  let queries = [];
  for (let coatId of req.body.coats) {
    const queryPromise = new Promise((resolve, reject) => {
      coat.findById(coatId).then(
        (coat) => {
          if (!coat) {
            reject('coat not found: ' + coatId);
          }
          coat.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + coat.imageUrl;
          resolve(coat);
        }
      ).catch(
        () => {
          reject('Database error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (coats) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        coats: coats,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};
