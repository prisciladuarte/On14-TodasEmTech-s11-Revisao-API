const express = require("express");
const controller = require("../controller/estabelecimentoController");
const router = express.Router();

router.get("/todos", controller.getAll);

module.exports = router;
