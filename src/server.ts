import express from 'express';
import router from './router';
import connectDB from './db';
import ENV from './config';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(ENV.PORT, () => {
    console.log(`Server is running on port:${ENV.PORT}`);
});

app.use('/api', router);

(async () => {
    await connectDB()
        .then(() => {
            console.log('Connected to MongoDB');
        });
})();