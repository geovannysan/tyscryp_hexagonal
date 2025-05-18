
import Contact from "../../domain/models/Contacts";
import { IContact } from "../../domain/Repository/IModelosRepo";


export class ContactRepository implements IContact {
   async findUniquename(name: string): Promise<Contact | null> {
        const result = await Contact.findOne({
            where: { number: name }
        });
        return result ? result.toJSON() as Contact : null;
    }
    async findById(id: number): Promise<Contact | null> {
        const result = await Contact.findByPk(id);
        return result ? result.toJSON() as Contact : null;
    }
    async create(data: Partial<Contact>): Promise<Contact> {
        const result = await Contact.create(
            data as Contact,
            {
                include: ["extraInfo"]
            }
        );
        return result.toJSON() as Contact;
    }
   async update(id: number, data: Partial<Contact>): Promise<Contact> {
        const item = await Contact.findByPk(id);
        if (!item) throw new Error("Not found");
        await item.update(data);
        return item.toJSON() as Contact;
    }
    async delete(id: number): Promise<void> {
      await  Contact.destroy({
            where: { id: id }
        })
    }

}
