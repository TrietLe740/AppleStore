import createApiClient from "./api.service";
class ProductService {
  constructor(baseUrl = "/api/products") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }
  async find(query) {
    console.log(query);
    return (await this.api.get("/", { params: query })).data;
  }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }
  async deleteAll() {
    return (await this.api.delete("/")).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
  // async hidden(id) {
  //   return (await this.api.patch(`/${id}`, data)).data;
  // }
}
export default new ProductService();
