import { Schema, model } from 'mongoose';

interface Recurso {
    nombre: string;
    url: string;
    descripcion: string;
}

const recursoSchema = new Schema<Recurso>({
    nombre: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Por favor ingresa un nombre'],
    },
    url: {
        type: String,
        lowercase: true,
    },
    descripcion: {
        type: String,
        trim: true,
        lowercase: true,
    },
});

const RecursoModel = model('Recurso', recursoSchema);

export { RecursoModel };
