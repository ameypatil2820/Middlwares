const express = require('express');
require('dotenv').config();
const core = require('cors');
require("./src/config/db")

const middle = require('./src/middleware/userMiddleware')

const app = express();
app.use(core());
app.use(express.json());

app.use('/uploads', express.static('public/uploads'));

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/user', userRoutes);

const incomeRoutes = require('./src/routes/incomeRoutes');
app.use('/api/income',middle, incomeRoutes);

const expanseRouter = require('./src/routes/expenseRoute');
app.use('/api/exp', middle, expanseRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Running is http://localhost:${PORT}`);

})