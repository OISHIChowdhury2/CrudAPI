const express =require('express')
const studentRoutes = require('./src/students/routes')
const app = express();

const port = 3000;

app.use(express.json());
app.get("/", (req, res)=>{
    res.send("hi");
});
app.use('/api/v1/student', studentRoutes);
app.listen(port, () => console.log(`app server ${port}`));