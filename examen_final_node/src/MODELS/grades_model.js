import { DataTypes } from "sequelize";
import { sequelize } from "../DB/db_conexion.js";
import { student } from "./student_model.js";
import { teacher } from "./teacher_model.js";
import { classModel } from "./curses_model.js";

export const grade = sequelize.define('grade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: student,
            key: 'id'
        }
    },
    teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: teacher,
            key: 'id'
        }
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

student.hasMany(grade, { foreignKey: 'studentId' });
teacher.hasMany(grade, { foreignKey: 'teacherId' });
classModel.hasMany(grade, { foreignKey: 'classId' });
grade.belongsTo(student, { foreignKey: 'studentId' });
grade.belongsTo(teacher, { foreignKey: 'teacherId' });
grade.belongsTo(classModel, { foreignKey: 'classId' });

