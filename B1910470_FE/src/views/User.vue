<template>
  <Form @submit="onSubmit" class="mb-4">
    <div class="form-outline form-white mb-4 mt-5">
      <label class="form-label" for="typeName">Số điện thoại của bạn</label>
      <Field
        id="typeNumber"
        class="form-control form-control-lg"
        name="phone"
        type="number"
        placeholder="Số điện thoại"
      />
      <ErrorMessage class="errMsg" name="phone" />
    </div>
    <button type="submit" class="btn btn-dark btn-block btn-lg">
      <div class="d-flex justify-content-between">
        <span style="margin: 0 auto">Xem thông tin</span>
      </div>
    </button>
  </Form>
  <div class="table table-all-product row m-0">
    <table class="col-12">
      <thead>
        <tr class="text-center">
          <th>STT</th>
          <th>Mã đơn hàng</th>
          <th>Thông tin đơn</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data" :key="index" :data="item">
        <tr class="text-center">
          <td>{{ index + 1 }}</td>
          <td>{{ item._id }}</td>
          <td>
            <!-- <table>
              <tbody> -->
            <tr
              class="row col-12"
              v-for="(cardItem, i) in item.cardItems"
              :key="i"
            >
              <td class="text-left col-7">
                {{ cardItem.name }} ({{ cardItem.option }})
              </td>
              <td class="col-4">Giá {{ cardItem.price }}</td>
              <td class="col-1">SL: {{ cardItem.quantity }}</td>
            </tr>
            <!-- </tbody>
            </table> -->
          </td>
          <td>
            {{ item.status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import invoiceService from "@/services/invoice.service.js";

export default {
  name: "User",

  data() {
    return {
      data: [],
    };
  },

  components: {
    Form,
    Field,
    ErrorMessage,
  },

  computed: {
    schema() {
      return yup.object({
        phone: yup
          .string()
          .matches(
            RegExp("([+]84|84|0[3|5|7|8|9])+(([0-9]{8})|([0-9]{9}))"),
            "Không đúng định dạng"
          )
          .required("Bắt buộc"),
      });
    },
  },

  methods: {
    async onSubmit(value) {
      console.log(value);
      this.data = await invoiceService.findByPhoneNumber({
        phone: value.phone,
      });
      console.log(this.data);
    },

    changeColorTr() {},
  },
};
</script>

<style>
.pending {
  background-color: coral;
}
</style>
