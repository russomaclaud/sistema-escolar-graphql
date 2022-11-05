import { Schema, model } from 'mongoose';
import { InteligenciaModel } from './inteligencia';
import { TeacherLiderModel } from './teacherLider';

interface InteligenciaTeacher {
    inteligencia: Schema.Types.ObjectId;
    teacher: Schema.Types.ObjectId;
}

const inteligenciaTeacherSchema = new Schema<InteligenciaTeacher>({
    inteligencia: {
        type: Schema.Types.ObjectId,
        ref: InteligenciaModel,
        required: [true, 'Seleccione el grupo'],
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: TeacherLiderModel,
        required: [true, 'Seleccione el teacher'],
    },
});

const InteligenciaTeacher = model(
    'InteligenciaTeacher',
    inteligenciaTeacherSchema
);

export { InteligenciaTeacher };
