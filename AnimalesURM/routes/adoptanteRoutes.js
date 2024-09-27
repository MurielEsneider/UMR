const express = require ("express");
const router = express.Router();
const adoptanteRoute = require("../controller/adoptanteController");

router.get("/adoptantes", adoptanteRoute.obtenerAdoptante )
router.post("/adoptantes", adoptanteRoute.agregarAdoptante)
router.put("/adoptantes/:id", adoptanteRoute.actualizarAdoptante)
router.delete("/adoptantes/:id", adoptanteRoute.eliminarAdoptante)

module.exports = router;