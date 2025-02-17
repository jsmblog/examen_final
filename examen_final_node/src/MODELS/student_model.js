import { DataTypes } from "sequelize";
import { sequelize } from "../DB/db_conexion.js";
import { classModel } from "./curses_model.js";

export const student = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    identification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    classId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: classModel,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

classModel.hasMany(student, { foreignKey: 'classId' });
student.belongsTo(classModel, { foreignKey: 'classId' });

