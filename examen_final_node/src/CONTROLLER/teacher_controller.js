import { teacher } from '../MODELS/teacher_model.js';

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacher.findAll(); 
    if (!teachers || teachers.length === 0) {
      return res.status(404).json({ message: 'No teachers found' });
    }
    
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


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
export const loginTeacher = async (req, res) => {
  try {
    const { identification } = req.body;
    if (!identification) {
      return res.status(400).json({
        message: 'La identificación es requerida para iniciar sesión'
      });
    }

    const foundTeacher = await teacher.findOne({ where: { identification } });

    if (!foundTeacher) {
      return res.status(404).json({
        message: 'Profesor no encontrado con esa identificación'
      });
    }

    res.status(200).json({
      message: 'Profesor autenticado con éxito',
      teacher: {
        id: foundTeacher.id,
        name: foundTeacher.name,
        lastName: foundTeacher.lastName,
        identification: foundTeacher.identification,
        specialty: foundTeacher.specialty
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
