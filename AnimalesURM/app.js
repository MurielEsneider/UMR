const express = require("express");
const app = express();
const PORT = 4444;
const autoRoutes = require("./routes/autoRoutes")

const CONE = require("./config/db");
CONE();

app.use(express.json())

app.use("/api", autoRoutes)

app.listen(PORT, () => {
    console.log("Servidor en puerto: " +PORT)
})