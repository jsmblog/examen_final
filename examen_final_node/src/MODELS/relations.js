import { student } from "./student_model.js";
import { teacher } from "./teacher_model.js";
import { classModel } from "./curses_model.js";

student.belongsTo(classModel, { foreignKey: 'classId' });
classModel.hasMany(student, { foreignKey: 'classId' });

student.belongsTo(teacher, { foreignKey: 'teacherId' });
teacher.hasMany(student, { foreignKey: 'teacherId' });
