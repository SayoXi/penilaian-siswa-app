import {Sequelize} from "sequelize";

const db = new Sequelize('penilaian-siswa2', 'root', '', {
     host: "localhost",
     dialect: "mysql",
});

export default db;