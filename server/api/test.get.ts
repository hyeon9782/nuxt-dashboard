// next.js와 똑같은 방식으로 폴더가 url
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  return {
    api: "works",
  };
});
