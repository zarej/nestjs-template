import { createPool, createTypeParserPreset, sql } from "slonik";
import { load } from "dotenv-extended";

load();
import { createQueryLoggingInterceptor } from "slonik-interceptor-query-logging";

export const slonik = createPool(process.env.POSTGRES_CONNECTION_STRING!, {
  typeParsers: [
    ...createTypeParserPreset(),
    {
      name: "timestamptz",
      parse: (str) => new Date(str),
    },
  ],
  interceptors: [
    createQueryLoggingInterceptor(),
    // {
    //   afterPoolConnection: async (context, connection) => {
    //   //   await connection.query(sql.unsafe`
    //   //   create schema if not exists slonik_tools_demo_app;
    //   //   set search_path to slonik_tools_demo_app;
    //   // `);
    //     return null;
    //   },
    // },
  ],
});
