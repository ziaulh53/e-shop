import { defineStore } from "pinia";
import { api } from "../../../api";
import { useLocalStorage } from "@vueuse/core";
import { notify } from "../../../helpers";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: useLocalStorage("cart", []),
  }),
  getters: {
    shoppingCart: (state) => state.cart,
  },
  actions: {
    async userAddCart(data) {
      const isExist = this.cart.find(
        (item) =>
          item?._id === data?._id && item?.colors?._id === data?.colors?._id
      );
      if (isExist) {
        notify({
          success: false,
          msg: "This item already added in your cart!",
        });
      } else {
        this.cart.push(data);
        notify({ success: true, msg: "This item added into cart" });
      }
    },
    async cartQuantityIncrease(data) {
      const findIdx = this.cart.findIndex(
        (item) =>
          item?._id === data?._id && item?.colors?._id === data?.colors?._id
      );
      this.cart[findIdx] = { ...this.cart[findIdx], quantity: this.cart[findIdx].quantity + 1 };
    },
    async cartQuantityDecrease(data) {
      const findIdx = this.cart.findIndex(
        (item) =>
          item?._id === data?._id && item?.colors?._id === data?.colors?._id
      );
      this.cart[findIdx] = { ...this.cart[findIdx], quantity: this.cart[findIdx].quantity - 1 };
    },
    async singleCartItemDelete(data) {
       this.cart = this.cart.filter(
        (item) =>
          item?._id !== data?._id && item?.colors?._id !== data?.colors?._id
      );
    },
  },
});
