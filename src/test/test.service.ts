import { Injectable } from "@nestjs/common";
import { slonik } from "../config";
import { DatabaseConnection, sql } from "slonik";

@Injectable()
export class TestService {
  async testDb(): Promise<string> {    
    return (await slonik).connect(async (connection: DatabaseConnection) => {
        const result = await connection.query(sql`select name from users where user_id = 1`);
        connection.any
        console.log(result);
        return JSON.stringify(result.rows[0].name);
    });
  }
}
