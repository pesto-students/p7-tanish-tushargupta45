const mongoose = require("mongoose");
const User = require("../models/user");
const Asset = require("../models/assets");

exports.getAssets = (req, res, next) => {
  User.findById(req._userId)
    .populate("assets.items.assetItemId")
    .then((user) => {
      res.status(200).json(user.assets);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.addAssets = (req, res, next) => {
  const newAsset = new Asset({
    assetname: req.body.assetname,
    description: req.body.description,
    totalCost: req.body.totalCost,
    userId: req.body._userId,
  });

  newAsset.save();

  User.findById(req._userId)
    .then((user) => {
      user.assets.items.push({ assetItemId: newAsset._id });
      user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "Asset  Added!", AssetId: newAsset._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
