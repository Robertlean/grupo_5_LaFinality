module.exports = (sequelize, dataTypes) =>{
    let alias = "Carrito"
    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: dataTypes.STRING(100)
        },
        idPRoducto: {
            type: dataTypes.INTEGER(11)
        }        
    };
    
    let config = {
        tableName: "Carrito",
        timestamps: false
    }
    
    
    const Carrito = sequelize.define(alias, cols, config)

    return Carrito
}
