import axios from "axios";

const params = {
  headers: {
    Authorization:
      "bearer " +
      "101e17a3e331e50156ce4fec75d29e026e54eec542dfc99307afe734aa628c378db12e5806b502e9ca53a9859e87397d8c0ff35e84894ad7b2f05d8746b43424f083c84503cdcb0f653406393bdd17ba868a2a06c1c0d37eb637584b1286847c818d2cd0ecc704ef7b522a1da2afb6e53c02e4da6d4c0894f985f81c06875381",
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("https://simple-one-m1rh.onrender.com" + url, params);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: "https://simple-one-m1rh.onrender.com",
  headers: {
    Authorization:
      "bearer " +
      "101e17a3e331e50156ce4fec75d29e026e54eec542dfc99307afe734aa628c378db12e5806b502e9ca53a9859e87397d8c0ff35e84894ad7b2f05d8746b43424f083c84503cdcb0f653406393bdd17ba868a2a06c1c0d37eb637584b1286847c818d2cd0ecc704ef7b522a1da2afb6e53c02e4da6d4c0894f985f81c06875381",
  },
});
// fe3796614990e7f7628badb2595c2acdf4c099a887f02a04145e9600e797c02033d183d06d54dfc8e879a26733017ee00a914a6cba6c3602b91c888a6b2cc7f9467ff2963c9222a136b99c7063a53d09581769f600e3b3d23dddc2dbc05999c846ccf2c6331211e78772d26102bd67c62298e59540edef99ebd5b46ef8a1ce94
// 101e17a3e331e50156ce4fec75d29e026e54eec542dfc99307afe734aa628c378db12e5806b502e9ca53a9859e87397d8c0ff35e84894ad7b2f05d8746b43424f083c84503cdcb0f653406393bdd17ba868a2a06c1c0d37eb637584b1286847c818d2cd0ecc704ef7b522a1da2afb6e53c02e4da6d4c0894f985f81c06875381