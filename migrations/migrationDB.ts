import { BaseDatabase } from "../src/data/BaseDatabase"

export class MigrationDB extends BaseDatabase  {

public createTable() {
        BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS pokemons_go(
                id smallint PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                pokedexNumber smallint NOT NULL,
                imgName VARCHAR(50) NOT NULL,
                generation smallint 
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