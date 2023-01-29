import { get, delete, cria, recebeToken, getByID } from "../controllers/cadastroController";
import { Router } from 'express';

const rotas = Router();

routas.get('/', get);
rotas.get('/aluno/:id', getByID)
rotas.get('/:token', recebeToken)
rotas.post('/', cria)
rotas.deleta('/', deleta);

export default rotas;
