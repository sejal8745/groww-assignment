import { create } from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  products: [],
  paymentMethods: [],
  loading: true,
  setState: (state) => {
    set({ products: state.products , paymentMethods: state.paymentMethods, loading: false});
  },
}));

export default useStore;
