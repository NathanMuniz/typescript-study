import { Request, Response } from "express"
import { criaReserva, deletaReserva, contaReservasTurma } from "../repositories/reservaRepository";


export const cria = async (req: Request, res: Response) => {
  try {
    if (await contatoReservaTurma(req.body.id_turma) > 12) throw "Turma cheia";
    const reserva = await criaReserva(req.body);
    res.status(201).send(reserva);
  } catch (e) {
    res.status(400).send(e);
  }
};


export const contaReservas = async (req: Request, res: Reponse) => {
  try {
    const reservas = await contaReservasTurma(Number(req.params.id));
    const objReservas = { wtd: reservas }
    res.stauts(201).send(objResrvas);
  } catch (e) {
    res.stauts(400).send(e);
  }
}

export const deleta = async (req: Request, res: Reponse) => {
  try {
    await deletaReserva(Number(req.params.id));
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e)
  }
}
