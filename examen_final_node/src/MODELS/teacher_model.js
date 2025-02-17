import { DataTypes } from "sequelize";
import { sequelize } from "../DB/db_conexion.js";
 export const teacher = sequelize.define('teacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        identification : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        specialty : {
            type: DataTypes.STRING,
            allowNull: false,
        },
 },
{
    timestamps: false,    
}
)