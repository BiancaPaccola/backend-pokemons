import { BaseDatabase } from "../src/data/BaseDatabase"

export class MigrationDB extends BaseDatabase  {

public createTable() {
        BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS pokemons_go(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `)
        .then(() => {
            console.log(`Table pokemons_go created successfully!`)
        })
        .catch((error: any) => console.log(error.sqlMessage || error.message))
        .finally(() => {
        console.log("Ending connection!")
        return BaseDatabase.connection.destroy()
        })
    }
}