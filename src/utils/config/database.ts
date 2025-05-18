import 'dotenv'
require('dotenv').config()
module.exports = {
  define: {
    charset: "utf8mb4",    
    collate: 'utf8mb4_unicode_ci'
  },
  dialect:  "mysql",
  timezone: "-03:00",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,  // 👈 Agregar aquí
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
  dialectOptions: {
    charset: 'utf8mb4'
  }
};