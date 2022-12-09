const ProductService = require("../services/product.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  if (!req.body?.name)
    return next(new ApiError(400, "Name can not be empty !"));

  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `An error occurrend while creating the product`)
    );
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  const query = {};
  if (req.query.type) query.type = req.query.type;
  if (req.query.top === "true") query.top = true;
  if (req.query.search) query.$text = { $search: req.query.search };
  console.log(req.query.type);
  try {
    const productService = new ProductService(MongoDB.client);
    const name = req.query;
    // if (name) documents = await productService.findByName(name);
    documents = await productService.find(query);
    return res.status(200).json(documents);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `An error occurrend while retrieving the products `)
    );
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Product not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving product with id=${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  console.log(req.body);

  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.update(req.params.id, req.body);
    if (!document) {
      return next(new ApiError(404, "Product not found"));
    }
    return res.send({ message: "Product was updated succesfully " });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating product with id=${req.params.id}`)
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const document = await productService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Product not found"));
    }
    return res.send({ message: "Product was deleted succesfully " });
  } catch (error) {
    return next(
      new ApiError(500, `Could not delete product with id=${req.params.id}`)
    );
  }
};

exports.deleteAll = async (_req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const deletedCount = await productService.deleteAll();
    return res.send({
      message: `${deletedCount} products were deleted successfully`,
    });
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while removing all products")
    );
  }
};

exports.findAllTop = async (_req, res, next) => {
  try {
    const productService = new ProductService(MongoDB.client);
    const documents = await productService.findTop();
    return res.send(documents);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while retrieving top products")
    );
  }
};
