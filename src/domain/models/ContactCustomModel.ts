import { AutoIncrement, BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import Contact from "./Contacts";

@Table
class ContactCustom extends Model<ContactCustom> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    name: string

    @Column
    value: string

    @ForeignKey(() => Contact)
    @Column
    contactId: number;

    @BelongsTo(() => Contact)
    contact: Contact;

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date
}

export default ContactCustom