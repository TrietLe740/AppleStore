const express = require("express");
const products = require("../controllers/applestore.controller");
const invoice = require("../controllers/invoice.controller");

const router = express.Router();

router
  .route("/")
  .get(products.findAll)
  .post(products.create)
  .delete(products.deleteAll);

router.post("/invoice", invoice.create);

router.route("/top").get(products.findAllTop);

router
  .route("/:id")
  .get(products.findOne)
  .put(products.update)
  .delete(products.delete);

module.exports = router;
