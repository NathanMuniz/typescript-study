import { error } from "console";
import { Request, Response } from "express";
import { getAll, deleteAluno, deletaProfessor, criaAluno, criaProfessor, buscaTokenAluno }
import { criptografaSenha, criaTranspoter, geraToken, enviaEmail, verficaUsuario } from "../services"


