import { AllowNull, AutoIncrement, Column, CreatedAt, Default, HasMany, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";
import ContactCustom from "./ContactCustomModel";


@Table
class Contact extends Model<Contact> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
    
    @Column
    name: string;

    @AllowNull(false)
    @AllowNull
    @Unique
    @Column
    number: string

    @Column
    profilePicURl: string
    @Column
    typeContact: string

    @Default(false)
    @Column
    isGroup: boolean

    @CreatedAt
    createdAt: Date
    @UpdatedAt
    updatedAt: Date;
    @HasMany(()=>ContactCustom)
    extraInfo:ContactCustom

}
export default Contact