import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    CreatedAt,
    DataType,
    Default,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt
  } from "sequelize-typescript";
  import Ticket from "./Ticket";
  import Teams from "./Teams";
  import ChatTeams from "./ChatTeams";
  import ConexionType from "./ConexionType";
  import { IChatPerfil } from "../../Aplicacion/Interface/IChatPerfil";
  
  @Table
  class ChatPerfil extends Model<ChatPerfil, IChatPerfil> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @AllowNull
    @Unique
    @Column(DataType.TEXT)
    name: string;
  
    @Column
    session: string;
  
    @Column(DataType.TEXT)
    qrcode: string;
  
    @Column
    status: string;
  
    @Column
    battery: string;
  
    @Column
    plugged: boolean;
  
    @Column
    retries: number;
  
    @Column(DataType.TEXT)
    greetingMessage: string;
  
    @Default(false)
    @AllowNull
    @Column
    isDefault: boolean;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @ForeignKey(() => ConexionType)
    @Column
    conexionID: number;
  
    @BelongsTo(() => ConexionType)
    conexiontype: ConexionType;
  
    @HasMany(() => Ticket)
    tickets: Ticket[];
  
    @BelongsToMany(() => Teams, () => ChatTeams)
    assignedTeams: Array<Teams & { ChatTeams: ChatTeams }>;
  
    @HasMany(() => ChatTeams, { as: 'teamLinks' })
    teamLinks: ChatTeams[];
  }
  
  export default ChatPerfil;
  