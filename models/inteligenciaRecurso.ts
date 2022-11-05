import { Schema, model } from 'mongoose';
import { InteligenciaModel } from './inteligencia';
import { RecursoModel } from './recurso';

interface InteligenciaRecurso {
    inteligencia: Schema.Types.ObjectId;
    recurso: Schema.Types.ObjectId;
}

const inteligenciaRecursoSchema = new Schema<InteligenciaRecurso>({
    inteligencia: {
        type: Schema.Types.ObjectId,
        ref: InteligenciaModel,
        required: [true, 'Seleccione la inteligencia'],
    },
    recurso: {
        type: Schema.Types.ObjectId,
        ref: RecursoModel,
        required: [true, 'Seleccione el recurso'],
    },
});

const InteligenciaRecursoModel = model(
    'InteligenciaRecurso',
    inteligenciaRecursoSchema
);

export { InteligenciaRecursoModel };
