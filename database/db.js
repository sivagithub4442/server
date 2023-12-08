import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-hxmk1ae-shard-00-00.rd4imro.mongodb.net:27017,ac-hxmk1ae-shard-00-01.rd4imro.mongodb.net:27017,ac-hxmk1ae-shard-00-02.rd4imro.mongodb.net:27017/?ssl=true&replicaSet=atlas-c17rum-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;




