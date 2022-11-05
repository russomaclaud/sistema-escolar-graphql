import { connect } from 'mongoose';

const conectarDB = async () => {
    return await connect(process.env.MONGO_DB)
        .then(() => {
            console.log('MongoAtlas conectado');
        })
        .catch((e) => {
            console.log('Error en la conección con MongoAtlas', e);
        });
};

export default conectarDB;
