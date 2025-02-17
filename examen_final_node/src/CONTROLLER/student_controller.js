import { student } from '../MODELS/student_model.js';
import { teacher } from '../MODELS/teacher_model.js';
import { classModel } from '../MODELS/curses_model.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await student.findAll({
      attributes: ['id', 'name', 'lastName', 'identification'],
      include: [
        {
          model: teacher,
          attributes: ['id', 'name', 'lastName'],  
        },
        {
          model: classModel,
          attributes: ['id', 'name'],
        }
      ]
    });

    if (!students || students.length === 0) {
      return res.status(404).json({ message: 'No hay estudiantes registrados' });
    }

    res.status(200).json({ 
      message: 'Estudiantes obtenidos exitosamente',
      data: students 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const registerStudent = async (req, res) => {
  try {
    const { name, lastName, identification, classId, teacherId } = req.body;

    if (!classId || !teacherId) {
      return res.status(400).json({ message: 'El curso y el profesor son obligatorios' });
    }

    const newStudent = await student.create({ name, lastName, identification, classId, teacherId });

    if (!newStudent) {
      return res.status(400).json({
        message: 'No se pudo registrar el estudiante'
      });
    }

    res.status(201).json({
      message: 'Estudiante registrado exitosamente',
      student: newStudent
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};