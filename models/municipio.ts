import { Schema, model } from 'mongoose';
import { DepartamentoModel } from './departamento';

interface Municipio {
    nombre: string;
    descripcion: string;
    departamento: Schema.Types.ObjectId;
}

const municipioSchema = new Schema<Municipio>({
    nombre: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'Por favor ingresa el nombre del municipio'],
    },
    descripcion: {
        type: String,
        trim: true,
        lowercase: true,
    },
    departamento: {
        type: Schema.Types.ObjectId,
        required: [true, 'Selecciona el departamento'],
        ref: DepartamentoModel,
    },
});

const MunicipioModel = model('Municipio', municipioSchema);

export { MunicipioModel };
