// course_controller.js
import { classModel } from '../MODELS/curses_model.js';

export const getAllCourses = async (req, res) => {
  try {
    const courses = await classModel.findAll({
      attributes: ['id', 'name']
    });

    if (courses.length === 0) {
      return res.status(404).json({ message: 'No hay cursos registrados' });
    }

    res.status(200).json({
      message: 'Cursos obtenidos exitosamente',
      data: courses
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const addCourse = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'El nombre del curso es requerido.' });
    }    
    const newCourse = await classModel.create({ name });
    
    res.status(201).json({
      message: 'Curso añadido exitosamente.',
      course: newCourse
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
