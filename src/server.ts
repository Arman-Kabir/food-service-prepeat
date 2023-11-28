import mongoose from 'mongoose';
import app from './app';

main().catch(err => console.log(err));

async function main() {

    try {
        // await mongoose.connect(process.env.DATABASE_URL);


        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on port ${process.env.PORT}`)
          });

    } catch (error) {
        console.log(`Failed to connect to DB`,error);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();