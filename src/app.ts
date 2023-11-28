import express, { Application, NextFunction, Request, Response } from 'express';
var cors = require('cors');

const app:Application = express()
app.use(cors())
const port = 3000;

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req:Request, res:Response,next:NextFunction) => {
  res.send('Hello World!')
})



export default app;