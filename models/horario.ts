import { Schema, model } from 'mongoose';

import { Enum_Dia } from './enums';

interface Horario {
    dia: Enum_Dia;
    horaInicio: string;
    horaFin: string;
}

const horarioSchema = new Schema<Horario>({
    dia: {
        type: String,
        required: [true, 'Seleccione el día'],
        enum: Enum_Dia,
    },
    horaInicio: {
        type: String,
        required: [true, 'Ingrese la hora inicio'],
    },
    horaFin: {
        type: String,
        required: [true, 'Ingrese la hora fin'],
    },
});

const HorarioModel = model('Horario', horarioSchema);

export { HorarioModel };
