import { Schema, model } from 'mongoose';

interface Nivel {
    nombre: string;
    descripcion: string;
}

const nivelSchema = new Schema<Nivel>({
    nombre: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'Por favor ingresa un nombre'],
    },
    descripcion: {
        type: String,
        trim: true,
        lowercase: true,
    },
});

const NivelModel = model('Nivel', nivelSchema, 'niveles');

export { NivelModel };
