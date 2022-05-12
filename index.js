// npm initで初期化, package.jsonファイルの生成
// node index.jsでサーバー起動

// nodemonインストールでサーバーが自動で再起動
// npm i nodemon

// https://www.npmjs.com/package/express からコピペ
const express = require("express");
const path = require("path");
const app = express();

// index.jsのファイル位置を取得
console.log(__dirname);

// req.bodyが使えるようになる一文
app.use(express.urlencoded({ extended: false }));

// htmlファイルの読み込み(web-server内のpublicディレクトリ)
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  // asnwerはテキスト形式で返ってくる
  if (answer === "2") {
    // レスポンスをHTML化する方法①
    // res.send("<h1>正解</h1>");

    // HTMLファイルにリダイレクト
    res.redirect("/correct.html");
  } else {
    // res.send("不正解");
    res.redirect("/wrong.html");
  }
});

// app.get("/", function (req, res) {
//   // HTML式でデータを取得
//   res.send("<h1>トップページ</h1>");
// });

app.get("/api/v1/users", function (req, res) {
  // JSON式でデータを取得
  res.send({
    name: "Mike",
    age: 30,
  });
});

// サーバーが起動しているかどうか→コールバック関数を入れる
app.listen(3000, function () {
  console.log("I am running!");
});
