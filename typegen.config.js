import { load } from "dotenv-extended";

load();


/** @type {import('@slonik/typegen').Options} */
module.exports.default = {
    rootDir: 'src', // maybe you don't like using `src`
    connectionURI: process.env.POSTGRES_CONNECTION_STRING,
  }