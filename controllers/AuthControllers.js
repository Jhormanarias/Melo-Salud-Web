const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");
const router = require("../routes/router");
router.use(cors());
router.use(express.json());


//procedimiento o metodo par registrar personal


