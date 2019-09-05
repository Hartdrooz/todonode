

module.exports = class Configuration {
    constructor(){
        // Load environment variable when
        // running in development
        require('dotenv').config();
        this.port = process.env.PORT || 5000;
        this.sqlCnxString = process.env.SQL_CNX_STRING;
        this.machineName = process.env.MACHINE_NAME;
    }
}

