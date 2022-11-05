import { Schema, model } from 'mongoose';
import { GrupoModel } from './grupo';
import { NivelModel } from './nivel';

interface NivelGrupo {
    nivel: Schema.Types.ObjectId;
    grupo: Schema.Types.ObjectId;
}

const nivelGrupoSchema = new Schema<NivelGrupo>({
    nivel: {
        type: Schema.Types.ObjectId,
        ref: NivelModel,
        required: [true, 'Seleccione el nivel'],
    },
    grupo: {
        type: Schema.Types.ObjectId,
        ref: GrupoModel,
        required: [true, 'Seleccione el grupo'],
    },
});

const NivelGrupoModel = model('NivelGrupo', nivelGrupoSchema);

export { NivelGrupoModel };
