// import data from "../products.json";
// export default defineEventHandler(async () => {
//   return new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(JSON.stringify(data));
//     }, 2000);
//   });
// });
let productCount = 0;
export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCount++);
    });
    return {
      productCount,
    };
  });
};
