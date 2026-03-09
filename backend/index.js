const express = require('express');
require('dotenv').config();
const core = require('cors');
require("./src/config/db")


const app = express();
app.use(core());
app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/user', userRoutes);

const incomeRoutes = require('./src/routes/incomeRoutes');
app.use('/api/income', incomeRoutes);

const expanseRouter = require('./src/routes/expenseRoute');
app.use('/api/exp', expanseRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Running is http://localhost:${PORT}`);

})