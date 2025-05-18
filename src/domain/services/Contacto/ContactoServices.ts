import { Request, Response } from "express";
import AppError from "../../../helper/midelwares/error";
import { ContactRepository } from "../../../infraestructura/Repository/ContactRepository";
import { ContactUseCase } from "../../../aplication/use-cases/ContactUseCase";

const repository = new ContactRepository();
const useCase = new ContactUseCase(repository);
export class ContactoServices {
    getById = async (req: Request) => {
        const item = await useCase.get(Number(req.params.id));    
        return item
    };
    create = async (req: Request) => {
        if (!req.body.name) {
            throw new AppError("  Name is required    ");
        }
        const existingContact = await repository.findUniquename(req.body.number);
        if (existingContact) {
           
            throw new AppError("Contact with the same name already exists");
        }
        const item = await useCase.create(req.body);
        return item
    };

    update = async (req: Request) => {
        
        const item = await useCase.update(Number(req.params.id), req.body);
        return item
    };

    delete = async (req: Request) => {
        const item = await repository.findById(Number(req.params.id));
        if (!item) {
            throw new AppError("Not found");
        }
        await useCase.delete(Number(req.params.id));
        item;
    };
}

export default new ContactoServices();