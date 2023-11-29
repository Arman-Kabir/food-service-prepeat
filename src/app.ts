import express, { Application, NextFunction, Request, Response } from 'express';
var cors = require('cors');

import foodRouter from './app/routes/food.route';

const app:Application = express()
app.use(cors())
const port = 3000;

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',async (req:Request, res:Response,next:NextFunction) => {
  res.send('success')
});

// routes
app.use('/api/v1/food',foodRouter);



export default app;