import axios from "axios";

// curId += 1;
// item.id = curId;
// items[item.id] = item;
// log.info('Created item', item);

const ProductServices = {
  getAllproducts: async function getProductApi() {
    const response = await axios.get("http://127.0.0.1:4000/items");

    return response;
  },
  addProduct: async function getProductApi(productData) {
    const option = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      "http://127.0.0.1:4000/items",
      productData,
      option
    );

    return response;
  },
  deleteProduct: async function deleteProductApi(id) {
    const option = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.delete(
      `http://127.0.0.1:4000/items/${id}`,
      option
    );

    return response;
  },
};
export default ProductServices;
