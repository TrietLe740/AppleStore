<template>
  <div class="col-lg-5">
    <div class="bank-card card text-white rounded-3">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h5 class="font-weight-bold">Thẻ thanh toán</h5>
        </div>

        <p class="small mb-2">Loại thẻ</p>
        <a href="#!" type="submit" class="text-white mr-2"
          ><i class="fab fa-cc-mastercard fa-2x me-2"></i
        ></a>
        <a href="#!" type="submit" class="text-white mr-2"
          ><i class="fab fa-cc-visa fa-2x me-2"></i
        ></a>
        <a href="#!" type="submit" class="text-white mr-2"
          ><i class="fab fa-cc-amex fa-2x me-2"></i
        ></a>
        <a href="#!" type="submit" class="text-white mr-2"
          ><i class="fab fa-cc-paypal fa-2x"></i
        ></a>

        <Form class="mt-4" @submit="onSubmit" :validation-schema="schema">
          <div class="form-outline form-white mb-4">
            <label class="form-label" for="typeName">Tên chủ thẻ</label>
            <Field
              id="typeName"
              class="form-control form-control-lg"
              name="name"
              type="text"
              placeholder="Tên chủ thẻ"
            />
            <ErrorMessage class="errMsg" name="name" />
          </div>

          <div class="form-outline form-white mb-4">
            <label class="form-label" for="typeText">Số thẻ</label>
            <Field
              name="cardNumber"
              type="number"
              id="typeText"
              class="form-control form-control-lg"
              placeholder="1234 5678 9101 1234"
              minlength="19"
              maxlength="19"
            />
            <ErrorMessage class="errMsg" name="cardNumber" />
          </div>

          <div class="row mb-4">
            <div class="col-md-6">
              <div class="form-outline form-white">
                <label class="form-label" for="typeExp"
                  >Tháng/Năm hết hạn</label
                >

                <Field
                  as="select"
                  value="01"
                  name="month"
                  class="form-control form-control-md mr-2"
                  style="width: 40%; display: inline"
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Field>
                <Field
                  as="select"
                  value="18"
                  name="year"
                  class="form-control form-control-md"
                  style="width: 50%; display: inline"
                >
                  <option value="18" selected>2018</option>
                  <option value="19">2019</option>
                  <option value="20">2020</option>
                  <option value="21">2021</option>
                  <option value="22">2022</option>
                  <option value="23">2023</option>
                  <option value="24">2024</option>
                  <option value="25">2025</option>
                  <option value="26">2026</option>
                </Field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-outline form-white">
                <label class="form-label" for="typeText">CSC*</label>
                <Field
                  name="csc"
                  type="number"
                  id="typeText"
                  class="form-control form-control-md"
                  placeholder="123"
                  size="1"
                  minlength="3"
                  maxlength="3"
                />
                <ErrorMessage class="errMsg" name="csc" />
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="d-flex justify-content-between">
            <p class="mb-2">Tổng đơn hàng</p>
            <p class="mb-2">{{ formatVND(totalPurchase) }}</p>
          </div>
          <p class="mb-2">Chọn thanh toán</p>
          <div class="d-flex justify-content-between">
            <select class="form-control form-control-md mb-4">
              <option>Trả trước 500,000đ</option>
              <option>Trả toàn bộ</option>
            </select>
          </div>
          <button type="submit" class="btn btn-dark btn-block btn-lg">
            <div class="d-flex justify-content-between">
              <span style="margin: 0 auto"
                >Thanh toán <i class="fa-solid fa-check"></i
              ></span>
            </div>
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { formatVND } from "@/utils/format";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import InvoiceService from "@/services/invoice.service";

export default {
  name: "PaymentCard",

  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {},

  emits: ["reload"],

  computed: {
    schema() {
      return yup.object({
        name: yup
          .string()
          .required("*Trường này không để trống")
          .min(5, "*Nhiều hơn 5 kí tự"),
        cardNumber: yup
          .string()
          .required("*Trường này không để trống")
          .length(16, "*Số thẻ phải có 16 số"),
        csc: yup
          .string()
          .required("*Trường này không để trống")
          .min(3, "*CSC phải có 3 chữ số"),
        year: yup.string(),
        month: yup.string(),
      });
    },
  },

  methods: {
    formatVND,
    onSubmit(value, { resetForm }) {
      InvoiceService.create({
        payload: { cardItems: [...this.productCarts], ...value },
      });
      this.clearProductCart();
      this.$emit("reload", true);
      console.log({ cardItems: [...this.productCarts], ...value });
      resetForm();
    },

    clearProductCart() {
      window.localStorage.setItem("cartItem", JSON.stringify([]));
      this.$emit("reload", true);
    },
  },

  props: {
    productCarts: Array,
    totalPurchase: Number,
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

.errMsg {
  color: rgb(217, 255, 0);
  font-size: 0.8rem;
}
.bank-card {
  background-color: #6c757d;
}
</style>
