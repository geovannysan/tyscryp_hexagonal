import {
    Table,
    Column,
    CreatedAt,
    UpdatedAt,
    Model,
    ForeignKey,
    BelongsTo
  } from "sequelize-typescript";
import ChatPerfil from "./ChatPerfil";
import Teams from "./Teams";
  
  @Table
  class ChatTeams extends Model<ChatTeams> {
    @ForeignKey(() => ChatPerfil)
    @Column
    chatappId: number;
  
    @ForeignKey(() => Teams)
    @Column
    teamsId: number;
  
    @BelongsTo(() => Teams)
    teams: Teams;
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
  }
  
  export default ChatTeams;