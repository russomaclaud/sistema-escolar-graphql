import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar Date

    enum Enum_TipoDocumento {
        CEDULA
        TARJETA_IDENTIDAD
        NUMERO_TRIBUTARIO
        PASAPORTE
    }

    enum Enum_jornada {
        MADRUGADA
        TARDE
        COMPLETO
        UNICA
    }

    enum Enum_EstadoAcademicoAnterior {
        APROBADO
        REPROBADO
    }

    enum Enum_Estrato {
        ESTRATO1
        ESTRATO2
        ESTRATO3
        ESTRATO4
        ESTRATO5
        ESTRATO6
    }

    enum Enum_Genero {
        FEMENINO
        MASCULINO
        OTRO
    }

    enum Enum_GrupoSanguineo {
        O_POSITIVO
        O_NEGATIVO
        A_POSITIVO
        A_NEGATIVO
        B_POSITIVO
        B_NEGATIVO
        AB_POSITIVO
        AB_NEGATIVO
    }

    enum Enum_Rol {
        LIDER
        TEACHER
        PAPITO
        ESTUDIANTE
        ADMIN
    }

    type Estudiante {
        _id: ID!
        codigo: String!
        nombre: String!
        apellido: String!
        telefonoFijo: String!
        numeroCelular: String!
        correo: String!
        password: String!
        direccion: String!
        numeroIdentidad: String!
        tipoDocumento: Enum_TipoDocumento!
        fechaInscripcion: Date!
        fechaExpedicion: Date!
        fechaNacimiento: Date!
        jornada: Enum_jornada!
        estadoAcademicoAnterior: Enum_EstadoAcademicoAnterior!
        nombreColegio: String
        fechaExpulsion: Date
        certificado: Boolean
        resguardo: String
        sisben: Float!
        estrato: Enum_Estrato!
        estudianteMadreCabezaFamilia: Boolean
        hijoMadreCabezaFamilia: Boolean
        hijoVeteranoFuerzaPublica: Boolean
        hijoHeroeNacion: Boolean
        genero: Enum_Genero!
        grupoSanguineo: Enum_GrupoSanguineo!
        rol: Enum_Rol
        # grado:
    }

    type Query {
        Estudiantes: [Estudiante]
        Estudiante(_id: String!): Estudiante
    }

    type Mutation {
        crearEstudiante(
            codigo: String!
            nombre: String!
            apellido: String!
            telefonoFijo: String!
            numeroCelular: String!
            correo: String!
            password: String!
            direccion: String!
            numeroIdentidad: String!
            tipoDocumento: Enum_TipoDocumento!
            fechaInscripcion: Date!
            fechaExpedicion: Date!
            fechaNacimiento: Date!
            jornada: Enum_jornada!
            estadoAcademicoAnterior: Enum_EstadoAcademicoAnterior!
            nombreColegio: String
            fechaExpulsion: Date
            certificado: Boolean
            resguardo: String
            sisben: Float!
            estrato: Enum_Estrato!
            estudianteMadreCabezaFamilia: Boolean
            hijoMadreCabezaFamilia: Boolean
            hijoVeteranoFuerzaPublica: Boolean
            hijoHeroeNacion: Boolean
            genero: Enum_Genero!
            grupoSanguineo: Enum_GrupoSanguineo!
            rol: Enum_Rol
        ): Estudiante

        editarEstudiante(
            _id: String!
            nombreColegio: String
            fechaExpulsion: Date
            certificado: Boolean
            resguardo: String
            estudianteMadreCabezaFamilia: Boolean
            hijoMadreCabezaFamilia: Boolean
            hijoVeteranoFuerzaPublica: Boolean
            hijoHeroeNacion: Boolean
        ): Estudiante

        borrarEstudiante(_id: String, correo: String): Estudiante
    }
`;

export { typeDefs };
