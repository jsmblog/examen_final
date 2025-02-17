import { teacher } from '../MODELS/teacher_model.js';

export const registerTeacher = async (req, res) => {
  try {
    const { name, lastName, identification, specialty } = req.body;
    const newTeacher = await teacher.create({ name, lastName, identification, specialty });
    if(!newTeacher) {
      return res.status(400).json({
        message: 'No se pudo registrar el profesor'
      });
    }
    res.status(201).json({
      message: 'Profesor registrado exitosamente',
      teacher: newTeacher
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
