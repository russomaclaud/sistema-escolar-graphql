import { Schema, model } from 'mongoose';

interface Grupo {
    nombre: string;
    descripcion: string;
}

const grupoSchema = new Schema<Grupo>({
    nombre: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Ingrese un grado'],
    },
    descripcion: {
        type: String,
        trim: true,
        lowercase: true,
    },
});

const GrupoModel = model('Grupo', grupoSchema);

export { GrupoModel };
