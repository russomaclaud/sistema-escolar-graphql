import { Schema, model } from 'mongoose';
import { GrupoModel } from './grupo';
import { InteligenciaModel } from './inteligencia';

interface GrupoInteligencia {
    grupo: Schema.Types.ObjectId;
    inteligencia: Schema.Types.ObjectId;
}

const grupoInteligenciaSchema = new Schema<GrupoInteligencia>({
    grupo: {
        type: Schema.Types.ObjectId,
        ref: GrupoModel,
        required: [true, 'Seleccione el grupo'],
    },
    inteligencia: {
        type: Schema.Types.ObjectId,
        ref: InteligenciaModel,
        required: [true, 'Seleccione la inteligencia'],
    },
});

const GrupoInteligenciaModel = model(
    'GrupoInteligencia',
    grupoInteligenciaSchema
);

export { GrupoInteligenciaModel };
