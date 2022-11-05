import { Schema, model } from 'mongoose';
import { MunicipioModel } from './municipio';

interface ZonaResidencia {
    nombre: string;
    municipio: Schema.Types.ObjectId;
}

const zonaResidenciaSchema = new Schema<ZonaResidencia>({
    nombre: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'Por favor ingresa el nombre del municipio'],
    },
    municipio: {
        type: Schema.Types.ObjectId,
        required: [true, 'Selecciona el municipio'],
        ref: MunicipioModel,
    },
});

const ZonaResidenciaModel = model('ZonaResidencia', zonaResidenciaSchema);

export { ZonaResidenciaModel };
