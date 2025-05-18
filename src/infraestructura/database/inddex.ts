import { Sequelize } from "sequelize-typescript"
import ContactCustom from "../../domain/models/ContactCustomModel"
import Contact from "../../domain/models/Contacts"


const dbConfig= require('../../utils/config/database')
const sequelize= new Sequelize(dbConfig)

const models=[
    ContactCustom,
    Contact
]
sequelize.addModels(models)
export default sequelize
