import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Usuario = conn.define("usuario", {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

},
{
    tableName: "usuario"
}
);

export default Usuario
