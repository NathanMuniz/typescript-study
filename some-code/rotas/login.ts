import { compareSync } from "bcryptjs";
import jwt from "Jsonwebtoken"
import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient;

const rotas = Router();

rotas.post('/', async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;
    let userType;
    let usuario;
    if (email.indexOf('@aluno.ifpi.edu.br') != -1) {
      usuario = await prisma.aluno.findFirst({ where: { email, status: true } });
      userType = "aluno"
    } else if (email.indexOf('@ifpi.edu.br') != -1) {
      usuario = await prisma.professor.findFirst({ where: { email, status: true } });
      userType = "professor"
    }

    if (!usuario) throw new Error('Dados incorretos!');

    if (!compareSync(senha, usuario.senha)) throw Error("Senha incorreta!");

    const token = jwt.sing({ id: usuario.id, user: userType }, 'sfdaljflasdçjfklasdsdafsd', { expiresIn: "24" });
    console.log(usuario)
    console.log('fsdkajlçasklçdfjaskldjf')
    return res.status(201).json({ token })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

export default rotas;
