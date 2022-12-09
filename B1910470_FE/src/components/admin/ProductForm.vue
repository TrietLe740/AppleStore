<template>
  <div class="dashboard main-content row">
    <Form
      class="row col-12"
      @submit="submitProduct"
      :validation-schema="contactFormSchema"
      :initial-values="initData"
    >
      <div class="col-6">
        <div class="form-group">
          <label for="name">Tên sản phẩm</label>
          <Field name="name" type="text" class="form-control" />
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="price">Giá sản phẩm</label>
          <Field name="price" type="number" class="form-control" />
          <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="sale">Giá giảm</label>
          <Field name="sale" type="number" class="form-control" />
          <ErrorMessage name="sale" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="img">Link ảnh sản phẩm</label>
          <Field name="img" type="text" class="form-control" />
          <ErrorMessage name="img" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="desciption">Mô tả</label>
          <Field
            as="textarea"
            name="desciption"
            type="text"
            class="form-control"
          />
          <ErrorMessage name="desciption" class="error-feedback" />
        </div>
        <div class="form-group form-check">
          <Field
            id="top"
            type="checkbox"
            name="top"
            class="form-check-input"
            :value="true"
          />
          <label for="top" class="form-check-label">
            <strong>Top sản phẩm mới</strong>
          </label>
        </div>
        <div class="form-group text-center">
          <button @submit="handleUpdate" class="btn btn-primary">Lưu</button>
          <button type="button" class="ml-2 btn btn-secondary">Quay lại</button>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <button type="button" class="ml-2 btn btn-secondary">
            Thêm Option
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import ProductService from "@/services/product.service.js";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  emits: ["submit: product"],

  props: {
    product: { type: Object, required: true },
  },

  data() {
    const ProductFormSchema = yup.object().shape({
      name: yup.string().required("Tên phải có giá trị."),
      price: yup.number(),
      sale: yup.number(),
      discription: yup.string().max(100, "Mô tả tối đa 100 ký tự."),
      img: yup.string(),
    });
    return {
      fetchProduct: {},
      initData: {
        name: "a",
        price: 1,
        sale: 1,
        desciption: "abc",
        img: "img",
        top: true,
      },
      ProductLocal: this.product,
      ProductFormSchema,
    };
  },

  methods: {
    submitProduct(value) {
      console.log(value);
      ProductService.update(this.proxy, this.initData);
    },

    async handleUpdate(id, hidden) {
      console.log(hidden);
      await ProductService.update(id, { hidden: hidden });
      this.getProducts();
    },

    async getProduct() {
      this.fetchProduct = await ProductService.get(this.proxy);
      console.log(this.fetchProduct);
      this.initData = {
        name: this.fetchProduct?.name || "",
        price: this.fetchProduct?.price || 0,
        sale: this.fetchProduct?.sale || 0,
        desciption: this.fetchProduct?.desciption || "",
        img: this.fetchProduct?.img || "",
        top: this.fetchProduct?.top,
      };
    },
  },
  mounted() {
    this.proxy = this.$route.params.id;
    console.log(this.proxy);
    this.getProduct();
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
