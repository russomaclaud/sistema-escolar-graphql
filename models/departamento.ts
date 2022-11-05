import { Schema, model } from 'mongoose';
import { MunicipioModel } from './municipio';

interface Departamento {
    nombre: string;
    descripcion: string;
}

const departamentoSchema = new Schema<Departamento>(
    {
        nombre: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
            required: [true, 'Ingrese el nombre del departamento'],
        },
        descripcion: {
            type: String,
            trim: true,
            lowercase: true,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

departamentoSchema.virtual('municipios', {
    ref: MunicipioModel,
    localField: '_id',
    foreignField: 'departamento',
});

const DepartamentoModel = model('Departamento', departamentoSchema);

export { DepartamentoModel };
