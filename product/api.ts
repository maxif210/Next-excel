import axios from "axios";
import Papa from "papaparse";

import {Product} from "./types";

export default {
  list: async (): Promise<Product[]> => {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vTbb8kjf8wxQpAAOQv4CiTvox1nTX8X-r8oGnI-NzbEJteWgRa0_iPs0TfdrJv40ht4seGpO_HJNx8g/pub?output=csv`,
        {
          responseType: "blob",
        },
      )
      .then(
        (response) =>
          new Promise<Product[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const products = results.data as Product[];

                return resolve(
                  products.map((product) => ({
                    ...product,
                    price: Number(product.price),
                  })),
                );
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
};
