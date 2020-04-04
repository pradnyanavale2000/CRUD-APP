const express = require("express");
const router = express.Router();

const studentController = require('../controllers/student');

router.post("/signup", studentController.student_signup);
router.get("/show", studentController.student_show);
router.post("/showone", studentController.student_showone);
router.delete("/delete/:id", studentController.student_delete);
router.put("/update", studentController.student_update);

module.exports = router;