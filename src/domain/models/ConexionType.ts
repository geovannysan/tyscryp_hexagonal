import { AutoIncrement, Column, CreatedAt, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import ChatPerfil from "./ChatPerfil";

@Table
class ConexionType extends Model<ConexionType> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    tipo: string

    @Column
    variables: string
    @Column
    description: string

    @CreatedAt
    createdAt: Date;
    
    @UpdatedAt
    updatedAt: Date;
    @HasMany(() => ChatPerfil)
    chatperfil: ChatPerfil[]

}

export default ConexionType