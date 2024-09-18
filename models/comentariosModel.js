import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Postagem from "./postagemModel.js";
import Perfil from "./perfilModel.js";

const Comentario = conn.define("comentario",{
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'comentarios'
})

//assosialçao N:N
Perfil.belongsToMany(Postagem, {through: 'comentarios'}); //Um perfil pode ter muitas postagens através de comentários.
Postagem.belongsToMany(Perfil, {through: 'comentarios'}); //Uma postagem pode ter muitos perfis através de comentários.
//A tabela comentarios é uma tabela de junção que armazena as relações entre os perfis e as postagens.
// Ela deve ter colunas para as chaves estrangeiras de Perfil e Postagem, bem
//como outras colunas necessárias para armazenar informações adicionais sobre os comentários, se aplicável.

export default Comentario