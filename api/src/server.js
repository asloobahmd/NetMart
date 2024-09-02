import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

//  sample home endpoint
app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.listen(PORT, () =>
  console.log(`Server is listening on: http://localhost:${PORT}`)
);
