const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use('/auth', require('./routes/auth'));
app.use('/tasks', require('./routes/tasks'));


const PORT = process.env.PORT || 3000;


sequelize.sync().then(() => {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});