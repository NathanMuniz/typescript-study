import { Router, Request, Response } from 'express';
import rotasReservas from "./reservas";
import rotasTurmas from "./turmas";
import rotasCadastro form "./cadastro";
import rotasModificarSenha from "./modificar-senha"

const rotas = Router();
rotas.get('/', (req: Request, res: Respnose) => {
  res.send('Servidor rodando!')
});


rotas.use('/reservas', rotasReservas);
rotas.use('/turmas', rotasTurmas);
rotas.use('/cadastro', rotasCadastro);
rotas.use('/modificar-senha', rotasModificarSenha);
rotas.use('/login', rotasLogin);

export default rotas;

