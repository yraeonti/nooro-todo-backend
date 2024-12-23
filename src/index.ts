import { ConnectDB } from "./db/connect-db";
import { app } from "./app";
import { PrismaClient } from "@prisma/client";

const PORT = 5000;

let db: PrismaClient;

(async () => {
  try {
    db = ConnectDB.connect();

    console.log("connected to db...");
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, () => {
    console.log(`Server runnong on port ${PORT}`);
  });
})();

export { db };
