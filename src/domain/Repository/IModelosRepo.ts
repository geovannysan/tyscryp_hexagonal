import ContactCustom from "../models/ContactCustomModel";
import Contact from "../models/Contacts";
import { IGenery } from "./IGenery";

export interface IContact extends IGenery<Contact> {}
export interface IContactCustom extends IGenery<ContactCustom> {}
