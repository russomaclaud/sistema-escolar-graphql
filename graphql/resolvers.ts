import { EstudianteModel } from '../models/estudiante';

const resolvers = {
    Query: {
        Estudiantes: async () => {
            try {
                const estudiantes = await EstudianteModel.find();
                return estudiantes;
            } catch (error) {
                return { message: 'error solicitando los estudiantes', error };
            }
        },

        Estudiante: async (parent, args) => {
            try {
                const estudiante = await EstudianteModel.findOne({
                    _id: args._id,
                });
                return estudiante;
            } catch (error) {
                console.log('Error al solicitar un estudiante', error);
            }
        },
    },

    Mutation: {
        crearEstudiante: async (parent, args) => {
            try {
                // console.log('Se está ejecutando la creación de Estudiante');
                const estudianteCreado = await EstudianteModel.create({
                    codigo: args.codigo,
                    nombre: args.nombre,
                    apellido: args.apellido,
                    telefonoFijo: args.telefonoFijo,
                    numeroCelular: args.numeroCelular,
                    correo: args.correo,
                    password: args.password,
                    direccion: args.direccion,
                    numeroIdentidad: args.numeroIdentidad,
                    tipoDocumento: args.tipoDocumento,
                    fechaInscripcion: args.fechaInscripcion,
                    fechaExpedicion: args.fechaExpedicion,
                    fechaNacimiento: args.fechaNacimiento,
                    jornada: args.jornada,
                    estadoAcademicoAnterior: args.estadoAcademicoAnterior,
                    nombreColegio: args.nombreColegio,
                    fechaExpulsion: args.fechaExpulsion,
                    certificado: args.certificado,
                    resguardo: args.resguardo,
                    sisben: args.sisben,
                    estrato: args.estrato,
                    estudianteMadreCabezaFamilia:
                        args.estudianteMadreCabezaFamilia,
                    hijoMadreCabezaFamilia: args.hijoMadreCabezaFamilia,
                    hijoVeteranoFuerzaPublica: args.hijoVeteranoFuerzaPublica,
                    hijoHeroeNacion: args.hijoHeroeNacion,
                    genero: args.genero,
                    grupoSanguineo: args.grupoSanguineo,
                });

                return estudianteCreado;
            } catch (error) {
                console.log('Error creando estidiante', error);
            }
        },

        editarEstudiante: async (parent, args) => {
            try {
                const estudianteEditado =
                    await EstudianteModel.findByIdAndUpdate(
                        args._id,
                        {
                            nombreColegio: args.nombreColegio,
                            fechaExpulsion: args.fechaExpulsion,
                            certificado: args.certificado,
                            resguardo: args.resguardo,
                            estudianteMadreCabezaFamilia:
                                args.estudianteMadreCabezaFamilia,
                            hijoMadreCabezaFamilia: args.hijoMadreCabezaFamilia,
                            hijoVeteranoFuerzaPublica:
                                args.hijoVeteranoFuerzaPublica,
                            hijoHeroeNacion: args.hijoHeroeNacion,
                        },
                        { new: true }
                    );

                return estudianteEditado;
            } catch (error) {
                console.log('Error editando el estudiante', error);
            }
        },

        borrarEstudiante: async (parent, args) => {
            try {
                if (Object.keys(args).includes('_id')) {
                    const estudianteBorrado =
                        await EstudianteModel.findOneAndDelete({
                            _id: args._id,
                        });

                    return estudianteBorrado;
                } else if (Object.keys(args).includes('correo')) {
                    const estudianteBorrado =
                        await EstudianteModel.findOneAndDelete({
                            correo: args.correo,
                        });

                    return estudianteBorrado;
                }
            } catch (error) {
                console.log('Error al borrar el estudiante', error);
            }
        },
    },
};

export { resolvers };
