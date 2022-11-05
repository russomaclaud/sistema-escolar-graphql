import { Schema, model } from 'mongoose';

interface CalendarioAcademico {
    year: number;
}

const calendarioAcademicoSchema = new Schema<CalendarioAcademico>({
    year: {
        type: Number,
        min: 4,
        max: 4,
        required: [true, 'Ingrese el año'],
    },
});

const CalendarioAcademico = model(
    'CalendarioAcademico',
    calendarioAcademicoSchema
);

export { CalendarioAcademico };
