import { classModel } from '../MODELS/curses_model.js';
import { grade } from '../MODELS/grades_model.js';
import { student } from '../MODELS/student_model.js';
import { teacher } from '../MODELS/teacher_model.js';

export const assignGrade = async (req, res) => {
  try {
    const { grade: gradeValue, studentId, teacherId, classId } = req.body;
    if(gradeValue < 0 || gradeValue > 10) {
      return res.status(400).json({
        message: 'La calificación debe ser un valor entre 0 y 10'
      });
    }
    const newGrade = await grade.create({ grade: gradeValue, studentId, teacherId, classId });
    res.status(201).json({
      message: 'Calificación asignada exitosamente',
      grade: newGrade
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewGrades = async (req, res) => {
  try {
    const grades = await grade.findAll({
      include: [
        {
          model: student,
          attributes: ['id', 'name', 'lastName', 'identification']
        },
        {
          model: teacher,
          attributes: ['id', 'name', 'lastName', 'identification', 'specialty']
        },
        {
          model: classModel,
          attributes: ['id', 'name']
        }
      ]
    });
  if(grades.length === 0) {
    return res.status(404).json({
      message: 'No hay calificaciones registradas'
    });
  }
    res.status(200).json({
      message: 'Calificaciones obtenidas exitosamente',
      data: grades
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};