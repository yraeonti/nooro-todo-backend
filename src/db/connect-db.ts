import { PrismaClient } from "@prisma/client";

class ConnectDB {
  private static prisma: PrismaClient;

  static connect(): PrismaClient {
    if (!ConnectDB.prisma) {
      ConnectDB.prisma = new PrismaClient(); // Initialize only once
    }
    return ConnectDB.prisma;
  }
}

export { ConnectDB };
