import { Schema, model } from 'mongoose';
import { NivelModel } from './nivel';
import { RecursoModel } from './recurso';

interface NivelRecurso {
    nivel: Schema.Types.ObjectId;
    recurso: Schema.Types.ObjectId;
}

const nivelRecursoSchema = new Schema<NivelRecurso>({
    nivel: {
        type: Schema.Types.ObjectId,
        ref: NivelModel,
        required: [true, 'Seleccione el nivel'],
    },
    recurso: {
        type: Schema.Types.ObjectId,
        ref: RecursoModel,
        required: [true, 'Seleccione el recurso'],
    },
});

const NivelRecursoModel = model('NivelRecurso', nivelRecursoSchema);

export { NivelRecursoModel };
