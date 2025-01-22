import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize;
const Users = db.define('users',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate
    }
},{
    freezeTableName: true
});

export default Users;