const mysql = require("mysql2");


export class DB {
    public conn;

    constructor() {
        this.conn = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "instagram_test"
        }).promise()
    }
}

