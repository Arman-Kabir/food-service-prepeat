import mongoose from 'mongoose';
require('dotenv').config();
import app from './app';


async function main() {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}`);
        console.log('Database connected successfully');

        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on port ${process.env.PORT}`)
        });

    } catch (error) {
        console.log(`Failed to connect to DB`, error);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();