import conectarDB from './db/db';
import { DepartamentoModel } from './models/departamento';
import { Enum_Dia } from './models/enums';
import { HorarioModel } from './models/horario';
import { InteligenciaModel } from './models/inteligencia';
import { MunicipioModel } from './models/municipio';
import { NivelModel } from './models/nivel';
import { RecursoModel } from './models/recurso';
// import { TeacherLiderModel } from './models/teacherLider';
// import { EstudianteModel } from './models/estudiante';
// import {
//     Enum_TipoDocumento,
//     Enum_EstadoCivil,
//     Enum_Genero,
//     Enum_TipoPersona,
//     Enum_Rol,
//     Enum_jornada,
//     Enum_EstadoAcademicoAnterior,
//     Enum_Grado,
//     Enum_Estrato,
//     Enum_GrupoSanguineo,
// } from './models/enums';

const main = async () => {
    await conectarDB();
};

main();

/* CRUD TEACHER, LIDER Y ESTUDIANTES */

/* CREAR TEACHERS Y LIDERES */
// await TeacherLiderModel.create({
//     nombre: 'Marta',
//     apellido: 'Bolaños Correa',
//     edad: 23,
//     telefonoFijo: '7555555',
//     numeroCelular: '3815332211',
//     correo: 'martica@correo.com',
//     password: '12345678',
//     direccion: 'Calle 12 sur #58-98',
//     numeroIdentidad: '4343434',
//     tipoDocumento: Enum_TipoDocumento.CEDULA,
//     fechaExpedicion: '1998-01.05',
//     fechaNacimiento: '1979-08-13',
//     estadoCivil: Enum_EstadoCivil.SOLTERO,
//     genero: Enum_Genero.FEMENINO,
//     tipoPersona: Enum_TipoPersona.NATURAL,
//     experienciaLaboral: '2 años como secretaria administrartiva',
//     formacionAcademica: 'Secretaria profesional',
//     rol: Enum_Rol.LIDER,
// })
//     .then((teacherLider) => {
//         console.log('TeacherLider creado', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error al crear teacherLider', err);
//     });

/* CREAR ESTUDIANTE */
// await EstudianteModel.create({
//     codigo: '1002',
//     nombre: 'Pepe',
//     apellido: 'El toro',
//     telefonoFijo: '9131313',
//     numeroCelular: '9873808080',
//     correo: 'toro@correo.com',
//     password: '12345678',
//     direccion: 'Los Olmos',
//     numeroIdentidad: '7303030',
//     tipoDocumento: Enum_TipoDocumento.TARJETA_IDENTIDAD,
//     fechaInscripcion: '2021-11-11',
//     fechaExpedicion: '2018-07-03',
//     fechaNacimiento: '1999-01-01',
//     jornada: Enum_jornada.TARDE,
//     estadoAcademicoAnterior: Enum_EstadoAcademicoAnterior.APROBO,
//     nombreColegio: 'El consejo',
//     grado: Enum_Grado.GRADOA,
//     certificado: true,
//     resguardo: 'No se que es esto',
//     sisben: 48.71,
//     estrato: Enum_Estrato.ESTRATO1,
//     estudianteMadreCabezaFamilia: true,
//     hijoMadreCabezaFamilia: true,
//     genero: Enum_Genero.MASCULINO,
//     grupoSanguineo: Enum_GrupoSanguineo.AB_POSITIVO,
// })
//     .then((estudiante) => {
//         console.log('Estudiante Creado', estudiante);
//     })
//     .catch((err) => {
//         console.log('Error al crear estudiante', err);
//     });

/* OBTENER TODOS LOS TEACHERS Y LIDERES SIN FILTROS */
// await TeacherLiderModel.find()
//     .then((teacherLider) => {
//         console.log('Los Teachers', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error al obtener los Teachers', err);
//     });

/* OBTENER TODOS LOS TEACHERS POR ROL */
// await TeacherLiderModel.find({ rol: 'Teacher' })
//     .then((teacherLider) => {
//         console.log('Los Teachers', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error al obtener los Teachers', err);
//     });

/* OBTENER TODOS LOS LIDERES POR ROL */
// await TeacherLiderModel.find({ rol: 'Lider' })
//     .then((teacherLider) => {
//         console.log('Los Teachers', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error al obtener los Teachers', err);
//     });

/* OBTENER UN TEACHER O LIDER */
// await TeacherLiderModel.findById({ _id: '635812ce5d253f69a8b97d7c' })
//     .then((teacherLider) => {
//         console.log('Teache o Lider encontrado por ID', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error encontrando Un teacher o lider', err);
//     });

/* OBTENER TODOS LOS ESTUDIANTES */
// await EstudianteModel.find()
//     .then((estudiante) => {
//         console.log('Estudiante', estudiante);
//     })
//     .catch((err) => {
//         console.log('Error al obtener los estudiantes', err);
//     });

/* OBTENER UN ESTUDIANTE */
// await EstudianteModel.findById({ _id: '63581508809c047f66c3d5ad' })
//     .then((estudiante) => {
//         console.log('Estudiante encontrado por ID', estudiante);
//     })
//     .catch((err) => {
//         console.log('Error encontrando Un Estudiante', err);
//     });

// await EstudianteModel.findOne({ _id: '6357fa0bbafbf79411f11a7c' })
//     .then((teacherLider) => {
//         console.log('Estudiante encontrado por ID', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error encontrando Un Estudiante', err);
//     });

/* EDITAR LOS TEACHERS Y LIDERES */
// await TeacherLiderModel.findOneAndUpdate(
//     {
//         _id: '635812ce5d253f69a8b97d7c',
//     },
//     { nombre: 'Camilito', apellido: 'Torres Arias' },
//     { new: true }
// )
//     .then((teacherLider) => {
//         console.log('TeacherLider Actualizado', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error Actualizando Teacher o Lider', err);
//     });

/* EDITAR UN ESTUDIANTE */
// await EstudianteModel.findOneAndUpdate(
//     {
//         _id: '63581508809c047f66c3d5ad',
//     },
//     { nombre: 'John', apellido: 'Smilga Smith' },
//     { new: true }
// )
//     .then((estudiante) => {
//         console.log('Estudiante Actualizado', estudiante);
//     })
//     .catch((err) => {
//         console.log('Error Actualizando Estudiante', err);
//     });

/* ELIMINAR UN TEACHER O LIDER */
// await TeacherLiderModel.findOneAndDelete({
//     _id: '6357ecc6ec0ca1b4101f4be3',
// })
//     .then((teacherLider) => {
//         console.log('Teacher o Lider Eliminado', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error eliminando El Teacher o Lider', err);
//     });

/* ELIMINAR UN ESTUDIANTE */
// await EstudianteModel.findOneAndDelete({
//     _id: '6357fa0bbafbf79411f11a7c',
// })
//     .then((teacherLider) => {
//         console.log('Estudiante Eliminado', teacherLider);
//     })
//     .catch((err) => {
//         console.log('Error eliminando Estudiante', err);
//     });

/* CREAR EL NIVEL */
// await NivelModel.create({
//     nombre: 'Interpersonal',
// })
//     .then((nivel) => {
//         console.log('El niveles: ', nivel);
//     })
//     .catch((err) => {
//         console.log('Error al crear el nivel', err);
//     });

/* OBTENER EL NIVEL POPULATE CON TEACHER Y ESTUDIANTE */
// const nivel = await NivelModel.find({ nivel: 'Transicion A' })
//     .populate('teacher')
//     .populate('estudiante');

// console.log('El nivel es: ', nivel);

/* CREAR DEPARTAMENTO */
// await DepartamentoModel.create({
//     nombre: 'Huila',
//     descripcion: 'Descripción del departamento de Huila',
// })
//     .then((departamento) => {
//         console.log('El departamento es: ', departamento);
//     })
//     .catch((err) => {
//         console.log('Error al crear el departamento', err);
//     });

/* OBTENER LOS DEPARTAMENTOS DE COLOMBIA */
// await DepartamentoModel.find()
//     .then((departamento) => {
//         console.log('Los departamentos son: ', departamento);
//     })
//     .catch((err) => {
//         console.log('Error al obtener los departamentos', err);
//     });

/* OBTENER LOS DEPARTAMENTOS POPULATE MUNICIPIOS */
// const departamento = await DepartamentoModel.find({
//     depatamento: 'Huila',
// }).populate('municipios');
// console.log(
//     'Los departamentos con los municipios populate son:',
//     JSON.stringify(departamento)
// );

/* CREAR LOS MUNICIPIOS Y ASOCIARLOS AL DEPARTAMENTO */
// await MunicipioModel.create({
//     nombre: 'Hobo',
//     descripcion: 'Descripción del municipio de Hobo',
//     departamento: '63584d1a2c07c3cbf16fada8',
// })
//     .then((municipio) => {
//         console.log('Municipios creados con EXITO!!!', municipio);
//     })
//     .catch((err) => {
//         console.log('Error al crear el municipio', err);
//     });

// await MunicipioModel.find()
//     .populate('departamento')
//     .then((municipio) => {
//         console.log('Los municipios son', municipio);
//     })
//     .catch((err) => {
//         console.log('Error al obtener los municipios', err);
//     });

/* CREAR RECURSOS PRIMERO */
// await RecursoModel.create({
//     nombre: 'Taller de matematicas',
//     archivo: 'taller de matematicas PDF',
// })
//     .then((recurso) => {
//         console.log('El recurso creado es: ', recurso);
//     })
//     .catch((err) => {
//         console.log('Error creando el recurso', err);
//     });

/* EDITAR RECURSOS */
// await RecursoModel.findOneAndUpdate(
//     {
//         _id: '635e701ff4e2ce3830bc64cd',
//     },
//     { archivo: 'Ejercicio de Matemática XLSX' },
//     { new: true }
// )
//     .then((recurso) => {
//         console.log('Estudiante Actualizado', recurso);
//     })
//     .catch((err) => {
//         console.log('Error Actualizando Estudiante', err);
//     });

/* CREAR LAS INTELIGENCIAS */
// await InteligenciaModel.create({
//     nombre: 'Quinto',
// })
//     .then((inteligencia) => {
//         console.log('La inteligencia creada es: ', inteligencia);
//     })
//     .catch((err) => {
//         console.log('Error al crear la inteligencia', err);
//     });

/* BUSCAR LAS INTELIGENCIAS CON LOS RECURSOS POPULADOS */
// const inteligencia = await InteligenciaModel.find({
//     _id: '635e777ec6102937ccf1e3c7',
// }).populate('recursos');
// console.log(
//     'La inteligencia con los recursos es: ',
//     JSON.stringify(inteligencia)
// );
