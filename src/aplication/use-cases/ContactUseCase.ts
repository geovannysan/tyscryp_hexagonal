import Contact from "../../domain/models/Contacts";
import { IContact } from "../../domain/Repository/IModelosRepo";

export class ContactUseCase {
  constructor(private repo: IContact) {}

  async get(id: number): Promise<Contact | null> {
    return this.repo.findById(id);
  }

  async create(data: Partial<Contact>): Promise<Contact> {
    if (!data.name) {
      throw new Error("Name is required");
    }
    const existingContact = await this.repo.findUniquename(data.name);
    if (existingContact) {
      throw new Error("Contact with this name already exists");
    }
    return this.repo.create(data);
  }

  async update(id: number, data: Partial<Contact>): Promise<Contact> {
    return this.repo.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
