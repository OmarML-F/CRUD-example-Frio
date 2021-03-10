const express = require('express');
const app = express();
const route = require('./routes/empleados.route');
const cors = require('cors');

app.use(cors());
//Getting our api routes
app.use('/api/empleados',route);
app.use ('/api.empleados/:id',route); 


const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
    console.log(`Runing on port: ${PORT}`);
}); 
