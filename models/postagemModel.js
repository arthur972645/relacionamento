import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Perfil from "./perfilModel.js";

const Postagem = conn.define("postagem", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    curtidas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

},
{
    tableName: "postagem"
}
);

//associalçao 1:N
Perfil.hasMany(Postagem); //Perfil pode ter muitas Postagem
Postagem.belongsTo(Perfil); // uma Postagem pertence a um Perfil.

export default Postagem
