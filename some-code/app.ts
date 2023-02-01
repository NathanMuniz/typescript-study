import express, { NextFucntion, Request, Response } from "express";
import autentication from "../middleware/auth";
import rotas from "./rotas";
import cors from cors;
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: process.env.FRONTED || "*",
  creadential: true,
  methods: 'GET, PUT, POST, OPTIONS, DELETE, PATCH',
}));

app.use(cookieParser());

app.use(express.json());

app.use('/', rotas);

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log(`Servidor stated in door ${porta}`)
})

export default app;
