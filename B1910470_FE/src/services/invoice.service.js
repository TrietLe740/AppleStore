import createApiClient from "./api.service";
class InvoiceService {
  constructor(baseUrl = "/api/products/invoice") {
    this.api = createApiClient(baseUrl);
  }

  async create(data) {
    console.log(data);
    return (await this.api.post("/", data)).data;
  }
}
export default new InvoiceService();
