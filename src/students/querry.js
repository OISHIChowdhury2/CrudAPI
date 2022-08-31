const getStudent ="SELECT * FROM student";
const getStudentById ="SELECT * FROM student where id=$1";
const addStudent="INSERT INTO student(name, email, age) Values($1, $2, $3)";
const checkEmailExists ="SELECT s from student s where s.email =$1";
const removeStudent ="DELETE FROM student WHERE id=$1";
const updateStudent="UPDATE student SET name = $1, email = $2, age = $3 where id = $4";

module.exports = {
    getStudent,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
};