import express from "express";
const app = express();

// // 딱 거기에 한해서만 표시
// app.all("/api", (req, res, next) => {
//   console.log("all");
//   next();
// });
// //뒤에 이어지는 경로도 다 보여준다
// app.use("/sky", (req, res, next) => {
//   console.log("use");
//   next();
// });

// //콜백 미들웨어 함수 - 가공 해 리스폰드 이용해서 보냄
// app.get("/sky/:id", (req, res, next) => {
//   //console.log(req.path);
//   //console.log(req.headers);
//   console.log(req.params);
//   console.log(req.params.id);

//   console.log(req.query);
//   console.log(req.query.keyword);
//   //res.json({ name: "Haeun" });
//   //res.sendStatus(400);
//   res.setHeader("jey", "value");
//   res.status(201).send("created");
// });

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("first");
//     res.send("Hello"); // 첨에 센드를 한 사람이 이긴다. 두번쨰는 작동하지 않는다
//   },
//   (req, res, next) => {
//     console.log("first2");
//     next();
//   }
// );

// app.get("/", (req, res, next) => {
//   console.log("second");
// });

// app.use((req, res, next) => {
//   res.status(404).send("Not found");
// });
// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send("sorry try later!");
// });

app.use(express.json());
app.post("/", (req, res, next) => {
  console.log(req.body);
});
app.listen(8080);
