import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
    Enum_TipoDocumento,
    Enum_EstadoCivil,
    Enum_Genero,
    Enum_TipoPersona,
    Enum_Rol,
} from './enums';
import { NivelModel } from './nivel';

interface TeacherLider {
    nombre: string;
    apellido: string;
    edad: number;
    telefonoFijo: string;
    numeroCelular: string;
    correo: string;
    password: string;
    direccion: string;
    numeroIdentidad: string;
    tipoDocumento: Enum_TipoDocumento;
    fechaExpedicion: Date;
    fechaNacimiento: Date;
    estadoCivil: Enum_EstadoCivil;
    genero: Enum_Genero;
    tipoPersona: Enum_TipoPersona;
    experienciaLaboral: string;
    formacionAcademica: string;
    rol: Enum_Rol;
    grados: [Schema.Types.ObjectId];
    niveles: [Schema.Types.ObjectId];
}

const teacherLiderSchema = new Schema<TeacherLider>({
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
    edad: {
        type: Number,
        min: 1,
        max: 100,
        required: [true, 'Por favor ingresa una edad'],
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
        unique: true,
        // select: false,
        minlenght: 6,
        required: [true, 'Por favor ingresa un numero de identidad'],
    },
    tipoDocumento: {
        type: String,
        enum: Enum_TipoDocumento,
    },
    fechaExpedicion: {
        type: Date,
        required: [true, 'Por favor ingresa una fecha de expedición'],
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'Por favor ingresa una fecha nacimiento'],
    },
    estadoCivil: {
        type: String,
        required: [true, 'Seleccione un estado civil'],
        enum: Enum_EstadoCivil,
    },
    genero: {
        type: String,
        required: [true, 'Seleccione un genero'],
        enum: Enum_Genero,
    },
    tipoPersona: {
        type: String,
        required: [true, 'Seleccione un tipo de persona'],
        enum: Enum_TipoPersona,
    },
    experienciaLaboral: {
        type: String,
        trim: true,
        required: [true, 'Por favor ingresa la experiencia laboral'],
    },
    formacionAcademica: {
        type: String,
        trim: true,
        required: [true, 'Por favor ingresa la formación academica'],
    },
    rol: {
        type: String,
        required: [true, 'Seleccione un rol'],
        enum: Enum_Rol,
    },
    grados: [
        {
            type: Schema.Types.ObjectId,
            required: [true, 'Seleccione el grado'],
            ref: 'Grado',
        },
    ],
    niveles: [
        {
            type: Schema.Types.ObjectId,
            ref: NivelModel,
        },
    ],
});

const TeacherLiderModel = model('TeacherLider', teacherLiderSchema);

export { TeacherLiderModel };
