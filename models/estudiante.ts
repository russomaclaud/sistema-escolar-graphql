import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
    Enum_TipoDocumento,
    Enum_Genero,
    Enum_Rol,
    Enum_jornada,
    Enum_EstadoAcademicoAnterior,
    Enum_Estrato,
    Enum_GrupoSanguineo,
} from './enums';

interface Estudiante {
    codigo: string;
    nombre: string;
    apellido: string;
    telefonoFijo: string;
    numeroCelular: string;
    correo: string;
    password: string;
    direccion: string;
    numeroIdentidad: string;
    fechaInscripcion: Date;
    fechaExpedicion: Date;
    fechaNacimiento: Date;
    nombreColegio: string;
    fechaExpulsion: Date;
    certificado: boolean;
    resguardo: string;
    sisben: number;
    tipoDocumento: Enum_TipoDocumento;
    jornada: Enum_jornada;
    estadoAcademicoAnterior: Enum_EstadoAcademicoAnterior;
    estudianteMadreCabezaFamilia: boolean;
    hijoMadreCabezaFamilia: boolean;
    hijoVeteranoFuerzaPublica: boolean;
    hijoHeroeNacion: boolean;
    estrato: Enum_Estrato;
    genero: Enum_Genero;
    grupoSanguineo: Enum_GrupoSanguineo;
    rol: Enum_Rol;
}

const estudianteSchema = new Schema<Estudiante>({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        minlength: [4, 'El código debe ser mayor a 6 caracteres'],
        required: [true, 'Por favor ingresa un código'],
    },
    nombre: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Por favor ingresa un nombre'],
    },
    apellido: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Por favor ingresa un apellido'],
    },
    telefonoFijo: {
        type: String,
        trim: true,
        required: [true, 'Por favor ingresa un número de teléfono'],
    },
    numeroCelular: {
        type: String,
        trim: true,
        required: [true, 'Por favor ingresa un número de celular'],
    },
    correo: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'Por favor ingresa un correo'],
        validate: [validator.isEmail, 'Por favor ingresa un correo válido'],
    },
    password: {
        type: String,
        // unique: true,
        trim: true,
        // select: false,
        lowercase: true,
        required: [true, 'Por favor ingresa una contraseña'],
    },
    direccion: {
        type: String,
        trim: true,
        required: [true, 'Por favor ingresa una dirección'],
    },
    numeroIdentidad: {
        type: String,
        // unique: true,
        // select: false,
        minlenght: 6,
        required: [true, 'Por favor ingresa un numero de identidad'],
    },
    tipoDocumento: {
        type: String,
        required: [true, 'Por favor selcciona un tipo documento'],
        enum: Enum_TipoDocumento,
    },
    fechaInscripcion: {
        type: Date,
        required: [true, 'Por favor ingresa una fecha de inscripción'],
    },
    fechaExpedicion: {
        type: Date,
        required: [true, 'Por favor ingresa una fecha de expedición'],
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'Por favor ingresa una fecha nacimiento'],
    },
    jornada: {
        type: String,
        required: [true, 'Seleccione una jornada'],
        enum: Enum_jornada,
    },
    estadoAcademicoAnterior: {
        type: String,
        required: [true, 'Seleccione el estado academico del estudiante'],
        enum: Enum_EstadoAcademicoAnterior,
    },
    nombreColegio: {
        type: String,
        trim: true,
    },
    fechaExpulsion: {
        type: Date,
    },
    certificado: {
        type: Boolean,
        default: false,
    },
    resguardo: {
        type: String,
        trim: true,
    },
    sisben: {
        type: Number,
        min: 1,
        max: 100,
        required: [true, 'Por favor ingresa el puntaje del sisben'],
    },
    estrato: {
        type: String,
        required: [true, 'Seleccione un estato'],
        enum: Enum_Estrato,
    },
    estudianteMadreCabezaFamilia: {
        type: Boolean,
        default: false,
    },
    hijoMadreCabezaFamilia: {
        type: Boolean,
        default: false,
    },
    hijoVeteranoFuerzaPublica: {
        type: Boolean,
        default: false,
    },
    hijoHeroeNacion: {
        type: Boolean,
        default: false,
    },
    genero: {
        type: String,
        required: [true, 'Seleccione un genero'],
        enum: Enum_Genero,
    },
    grupoSanguineo: {
        type: String,
        required: [true, 'Seleccione un grupo sanguineo'],
        enum: Enum_GrupoSanguineo,
    },
    rol: {
        type: String,
        enum: Enum_Rol,
        default: Enum_Rol.ESTUDIANTE,
    },
});

const EstudianteModel = model('Estudiante', estudianteSchema);

export { EstudianteModel };
