enum Enum_TipoDocumento {
    // CEDULA,
    // TARJETA_IDENTIDAD,
    // NUMERO_TRIBUTARIO,
    // PASAPORTE,
    CEDULA = 'CEDULA',
    TARJETA_IDENTIDAD = 'TARJETA_IDENTIDAD',
    NUMERO_TRIBUTARIO = 'NUMERO_TRIBUTARIO',
    PASAPORTE = 'PASAPORTE',
}

enum Enum_EstadoCivil {
    // SOLTERO,
    // CASADO,
    // DIVORSIADO,
    // VIUDO,
    // UNION_LIBRE,
    SOLTERO = 'SOLTERO',
    CASADO = 'CASADO',
    DIVORSIADO = 'DIVORSIADO',
    VIUDO = 'VIUDO',
    UNION_LIBRE = 'UNION_LIBRE',
}

enum Enum_Genero {
    // FEMENINO,
    // MASCULINO,
    // OTRO,
    FEMENINO = 'FEMENINO',
    MASCULINO = 'MASCULINO',
    OTRO = 'OTRO',
}

enum Enum_TipoPersona {
    // NATURAL,
    // JURIDICO,
    NATURAL = 'NATURAL',
    JURIDICO = 'JURIDICO',
}

enum Enum_Rol {
    // LIDER,
    // TEACHER,
    // PAPITO,
    // ESTUDIANTE,
    // ADMIN,
    LIDER = 'LIDER',
    TEACHER = 'TEACHER',
    PAPITO = 'PAPITO',
    ESTUDIANTE = 'ESTUDIANTE',
    ADMIN = 'ADMIN',
}

enum Enum_jornada {
    // MADRUGADA,
    // TARDE,
    // COMPLETO,
    // UNICA,
    MADRUGADA = 'MADRUGADA',
    TARDE = 'TARDE',
    COMPLETO = 'COMPLETO',
    UNICA = 'UNICA',
}

enum Enum_EstadoAcademicoAnterior {
    // APROBADO,
    // REPROBADO,
    APROBADO = 'APROBADO',
    REPROBADO = 'REPROBADO',
}

// enum Enum_Grado {
//     GRADOA = 'Grado A',
//     GRADOB = 'Grado B',
//     GRADOC = 'Grado C',
// }

enum Enum_Estrato {
    // ESTRATO1,
    // ESTRATO2,
    // ESTRATO3,
    // ESTRATO4,
    // ESTRATO5,
    // ESTRATO6,
    ESTRATO1 = 'ESTRATO1',
    ESTRATO2 = 'ESTRATO2',
    ESTRATO3 = 'ESTRATO3',
    ESTRATO4 = 'ESTRATO4',
    ESTRATO5 = 'ESTRATO5',
    ESTRATO6 = 'ESTRATO6',
}

enum Enum_GrupoSanguineo {
    // O_POSITIVO,
    // O_NEGATIVO,
    // A_POSITIVO,
    // A_NEGATIVO,
    // B_POSITIVO,
    // B_NEGATIVO,
    // AB_POSITIVO,
    // AB_NEGATIVO,
    O_POSITIVO = 'O_POSITIVO',
    O_NEGATIVO = 'O_NEGATIVO',
    A_POSITIVO = 'A_POSITIVO',
    A_NEGATIVO = 'A_NEGATIVO',
    B_POSITIVO = 'B_POSITIVO',
    B_NEGATIVO = 'B_NEGATIVO',
    AB_POSITIVO = 'AB_POSITIVO',
    AB_NEGATIVO = 'AB_NEGATIVO',
}

enum Enum_Dia {
    // LUNES,
    // MARTES,
    // MIERCOLES,
    // JUEVES,
    // VIERNES,
    LUNES = 'LUNES',
    MARTES = 'MARTES',
    MIERCOLES = 'MIERCOLES',
    JUEVES = 'JUEVES',
    VIERNES = 'VIERNES',
}

export {
    Enum_TipoDocumento,
    Enum_EstadoCivil,
    Enum_Genero,
    Enum_TipoPersona,
    Enum_Rol,
    Enum_jornada,
    Enum_EstadoAcademicoAnterior,
    // Enum_Grado,
    Enum_Estrato,
    Enum_GrupoSanguineo,
    Enum_Dia,
};
