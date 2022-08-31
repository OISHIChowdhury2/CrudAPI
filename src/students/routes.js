const { Router }= require('express')
const router = Router();
const {
    getStudent,
    addStudent,
    getStudentById,
    removeStudent,
    updateStudent,
  } = require("./controller");
  const {
    addUserValidation
  } = require('./userVal');

router.get("/", getStudent); 
router.post("/",addUserValidation,addStudent);
router.get("/:id", getStudentById); 
router.delete("/:id", removeStudent); 
router.put("/:id", updateStudent); 

module.exports =router;