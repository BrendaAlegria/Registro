var Sequelize=require("sequelize");

module.exports=(conexion)=>{
    const UsuarioSchema=conexion.define("usuario",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nomUsu:{
            type:Sequelize.STRING

        },
        email:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        tel:{
            type:Sequelize.STRING
        }
    });
    return UsuarioSchema;

};