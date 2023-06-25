import { PokemonDTO } from "../src/data/model/pokemon";

const readXlsxFile = require('read-excel-file/node')

readXlsxFile('./migrations/PokemonsGo.xlsx').then((rows: PokemonDTO[]) => {
    return rows
  })
  .then((rows: PokemonDTO[]) => {
    const result: PokemonDTO[] = rows.map((poke: any) => {
        return {
            id: poke[0],
            name: poke[1],
            pokedexNumber: poke[2],
            imgName: poke[3],
            generation: poke[4],
            evolutionStage: poke[5],
            evolved: poke[6],
            familyId: poke[7],
            crossGen: poke[8],
            type1: poke[9],
            type2: poke[10],
            weather1: poke[11],
            weather2: poke[12],
            statTotal: poke[13],
            atk: poke[14],
            def: poke[15],
            sta: poke[16],
            legendary: poke[17],
            aquireable: poke[18],
            spawns: poke[19],
            regional: poke[20],
            raidable: poke[21],
            hatchable:  poke[22],
            shiny: poke[23],
            nest: poke[24],
            new: poke[25],
            notGettable: poke[26],
            futureEvolve: poke[27],
            cp40: poke[28],
            cp39: poke[29],
        }
    })
    return result;
  })
  .then((results:PokemonDTO[]) => {
    results.shift()
    return results;
  })
  .then((results:PokemonDTO[]) => {return JSON.stringify(results)})
  .catch((err: any) => {console.log(err)});
