import { Request, Response } from "express";
import * as Yup from "yup";
import ContactoServices from "../../domain/services/Contacto/ContactoServices";
import AppError from "../../helper/midelwares/error";
interface ContactData {
  name: string;
  number: string;
  email?: string;
}
const useCase = ContactoServices;
export class ContactController {
  getById = async (req: Request, res: Response) => {
    const item = await useCase.getById(req);
    res.json(item);
  };
  create = async (req: Request, res: Response) => {
    const newContact: ContactData = req.body;
    newContact.number = String(newContact.number).replace("-", "").replace(" ", "");


    try {
      console.log(req.body);
      const item = await useCase.create(req);
      console.log(item);
      res.status(201).json(item);
    } catch (err: any) {
      console.log(err);
      if (err instanceof Yup.ValidationError)
        throw res.status(400).json({ errores: err.errors });
      throw res.status(400).json( new AppError(err.message))
    }

  };

  update = async (req: Request, res: Response) => {
    const item = await useCase.update(req);
    res.json(item);
  };

  delete = async (req: Request, res: Response) => {
    await useCase.delete(req)
    res.status(204).send();
  };
}

export default new ContactController();