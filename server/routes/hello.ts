// routes 폴더 안에 파일을 생성하면 api 접두사를 붙이지 않아도 된다.
export default defineEventHandler(() => {
  return {
    api: "Hello World from routes",
  };
});
