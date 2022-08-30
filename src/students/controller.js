const { query } = require('express');
const { is } = require('type-is');
const pool =require('../../db');

const queries = require("./querry");
const getStudent= (req, res)=>{
    pool.query(queries.getStudent, (error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
})
};

const getStudentById= (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error, results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
})
};

const addStudent= (req, res)=>{
    const {name,email,age}= req.body;

    pool.query(queries.checkEmailExists, [email],(error,results)=>{
        if(results.rows.length){
            res.send("email already exists");
        }
        //add student
        pool.query(queries.addStudent,
            [name, email, age],(error,results)=>{
        if(error) throw error;
        res.status(201).send("created");
        })
    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById,[id], (error, results)=>{
        const noStudentFound = !results.rows.length;
       if (noStudentFound){
        res.send("not exist");
       }
    pool.query(queries.removeStudent, [id] ,(error, results) =>{
   
        if(error) throw error;
    res.status(200).send("delected");
       });
});
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const {email} =  req.body;
    const {age} =  req.body;
    pool.query(queries.getStudentById,[id], (error, results)=>{
        const noStudentFound = !results.rows.length;
       if (noStudentFound){
        res.send("not exist");
       }
    pool.query(queries.updateStudent,[name,email,age,id],(error, results) =>{
        if(error) throw error;
        res.status(200).send("Updated!");
       });
});
};


module.exports={
    getStudent,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
};