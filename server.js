const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({ status: "Panel działa poprawnie 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port " + PORT));
