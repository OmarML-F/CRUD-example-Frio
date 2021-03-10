const pool= require('../configDb/databaseconfig');
const empleadosCrtl = {};


empleadosCrtl.getAllEmpleados = async(req, res) =>{
    try{
        const traerTodos = await pool.query("SELECT * FROM empleados ORDER BY id ASC");
        res.json(traerTodos.rows);
    }catch(err){
        console.log(err);
    }
}

empleadosCrtl.postEmpleado = async(req, res) =>{
    try{
        const {name,email,phone} = req.body;
        const response = await pool.query("INSERT INTO empleados (name,email,phone) VALUES ($1,$2,$3)",[name,email,phone]);
        res.json({
            message: 'User Added successfully',
            body: {
                user: {name, email, phone}
            }
        })

    }catch(err){
    
        console.log(err);}  
};



empleadosCrtl.getAllEmpleado = async(req, res) =>{
    
    const {id} = req.params;
    try{    
        const usuario = await pool.query("SELECT * FROM empleados WHERE id = $1", [id]);
        res.json(usuario.rows);
    }catch(err){
        console.log(err);
    }
};
 

empleadosCrtl.putEmpleado = async(req, res) =>{

    const {id} = req.params;
    const {name, email, phone} = req.body;
    try{    
        const usuario = await pool.query
        ("UPDATE empleados SET name=$2, email=$3, phone=$4 WHERE id=$1", 
        [id,name,email,phone]);
        res.json(`User ${id} has been updated successfully`);
    }catch(err){
        console.log(err);
    }
    
};


empleadosCrtl.deleteEmpleado = async(req, res) =>{

    const {id} = req.params;
    try{    
        const usuario = await pool.query("DELETE FROM empleados WHERE id = $1", [id]);
        res.json(`User ${id} deleted Successfully`);
    }catch(err){
        console.log(err);
    }
    
};



module.exports = empleadosCrtl;