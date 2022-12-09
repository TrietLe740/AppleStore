const { ObjectId } = require("mongodb");

class ProductService {
  constructor(client) {
    this.Product = client.db().collection("products");
  }

  extractProductData(payload) {
    const product = {
      name: payload.name,
      desciption: payload.desciption,
      price: payload.price,
      sale: payload.sale,
      top: payload.top,
      remain: payload.remain,
      hidden: payload.hidden,
    };

    Object.keys(product).forEach(
      (key) => product[key] === undefined && delete product[key]
    );
    return product;
  }

  async create(payload) {
    const product = this.extractProductData(payload);
    const result = await this.Product.findOneAndUpdate(
      product,
      { $set: { top: product.top === true } },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  // async find(filter) {
  //   const cursor = await this.Product.find({ top: true });
  //   console.log(filter);
  //   console.log(await cursor.toArray());
  //   return await cursor.toArray();
  // }
  find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Product.find(filter);
        console.log(filter);
        // console.log(await cursor.toArray());
        let result = await cursor.toArray();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(null);
      }
    });
  }

  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }

  async findById(id) {
    return await this.Product.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const filter = { _id: ObjectId.isValid(id) ? new ObjectId(id) : null };
    const update = this.extractProductData(payload);
    const result = await this.Product.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }

  async delete(id) {
    const result = await this.Product.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }

  async findTop() {
    return await this.find({ top: true });
  }

  async deleteAll() {
    const result = await this.Product.deleteMany({});
    return result.deletedCount;
  }
}

module.exports = ProductService;
