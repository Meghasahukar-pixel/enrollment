const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve the React build folder
app.use(express.static(path.join(__dirname, "build")));

// Mount JSON Server on /api
const apiRouter = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
app.use("/api", middlewares, apiRouter);

// Fallback to React app for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
