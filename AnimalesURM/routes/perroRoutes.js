const express = require ("express");
const router = express.Router();
const perroController = require("../controller/perroController");

router.get("/perros", perroController.obtenerPerro)
router.post("/perros", perroController.agregarPerro)
router.put("/perros/:id", perroController.actualizarPerro)
router.delete("/perros/:id",perroController.eliminarPerro)

module.exports = router;