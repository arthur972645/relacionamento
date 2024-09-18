import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Usuario from "./usuarioModel.js";

const Perfil = conn.define("perfil", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    } ,
    bio: {
        type: DataTypes.STRING,
        allowNull: false
    }  
},
{
    tableName: "perfil"
},
);
//associação 1 para 1 entre o perfil e o usuario
//usuasrio tem um perfil e um perfil tem um usuario
Usuario.hasOne(Perfil);
Perfil.belongsTo(Usuario);


export default Perfil