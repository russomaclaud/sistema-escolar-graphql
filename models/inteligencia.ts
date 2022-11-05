import { Schema, model } from 'mongoose';

interface Inteligencia {
    nombre: string;
    descripcion: string;
}

const inteligenciaSchema = new Schema<Inteligencia>({
    nombre: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Por favor ingresa un nombre'],
    },
    descripcion: {
        type: String,
        trim: true,
        lowercase: true,
    }
});

const InteligenciaModel = model('Inteligencia', inteligenciaSchema);

export { InteligenciaModel };
