const { ObjectId } = require("mongodb");

class InvoiceService {
  constructor(client) {
    this.Invoice = client.db().collection("invoice");
  }

  extractInvoiceData(payload) {
    const invoice = {
      cardItems: payload.cardItems,
      phone: payload.phone,
      cardNumber: payload.cardNumber,
      name: payload.name,
      csc: payload.csc,
      month: payload.month,
      year: payload.year,
    };

    Object.keys(invoice).forEach(
      (key) => invoice[key] === undefined && delete invoice[key]
    );
    return invoice;
  }

  async create(payload) {
    const invoice = this.extractInvoiceData(payload);
    if (Object.keys(invoice).length > 0) {
      invoice.status = "pending";
    }
    // console.log(invoice);
    try {
      const result = await this.Invoice.insertOne(invoice);
      return result.value;
    } catch (error) {
      console.log(error);
    }
  }

  find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Invoice.find(filter);
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
}

module.exports = InvoiceService;
