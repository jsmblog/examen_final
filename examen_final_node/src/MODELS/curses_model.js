import { DataTypes } from "sequelize";
import { sequelize } from "../DB/db_conexion.js";
import { student } from "./student_model.js";

export const classModel = sequelize.define("class", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    timestamps: false
})
