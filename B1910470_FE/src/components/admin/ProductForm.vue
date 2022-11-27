<template>
  <p>ProductForm</p>
  <!-- <Form @submit="submitProduct" :validation-schema="ProductFormSchema">
    <div class="form-group">
      <label for="name">Tên sản phẩm</label>
      <Field
        name="name"
        type="name"
        class="form-control"
        v-model="ProductLocal.name"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="price">Giá bán</label>
      <Field
        name="price"
        type="number"
        class="form-control"
        v-model="ProductLocal.price"
      />
      <ErrorMessage name="price" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="sale">Giảm giá</label>
      <Field
        name="sale"
        type="number"
        class="form-control"
        v-model="ProductLocal.sale"
      />
      <ErrorMessage name="sale" class="error-feedback" />
    </div>
    <div class="form-group form-check">
      <input
        name="top"
        type="checkbox"
        class="form-check-input"
        v-model="ProductLocal.top"
      />
      <label for="top" class="form-check-label">
        <strong>Sản phẩm top</strong>
      </label>
    </div>
    <div class="form-group">
      <label for="img">Hình sản phẩm</label>
      <Field
        name="img"
        type="text"
        class="form-control"
        v-model="ProductLocal.img"
      />
      <ErrorMessage name="sale" class="error-feedback" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
      <button
        v-if="ProductLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteProduct"
      >
        Xóa
      </button>
    </div>
  </Form> -->
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  emits: ["submit: product", "delete: product"],

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
      ProductLocal: this.product,
      ProductFormSchema,
    };
  },

  methods: {
    submitProduct() {
      this.$emit("submit:Product", this.ProductLocal);
    },
    deleteProduct() {
      this.$emit("delete:Product", this.ProductLocal.id);
    },
  },
};
</script>

<style></style>
