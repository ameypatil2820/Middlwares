const express = require('express');
require('dotenv').config();
const core = require('cors');
const userRoutes = require('./src/routes/userRoutes')



const app = express();
app.use(core());
app.use(express.json());

app.use('/api/user',userRoutes);


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running is http://localhost:${PORT}`);
    
})